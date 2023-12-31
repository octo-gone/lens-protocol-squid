import {DataHandlerContext} from '@subsquid/evm-processor';
import {Store} from '../db'
import {HttpClient} from '@subsquid/util-internal-http-client'


const IPFS_BATCH_SIZE = process.env.IPFS_BATCH_SIZE != undefined ? Number(process.env.IPFS_BATCH_SIZE) : 150

const ipfsClient = new HttpClient({
    baseUrl: process.env.IPFS_BASE_URL,
    headers: {
        'content-type': 'application/json',
    },
    retryAttempts: 3,
})

const reserveIpfsClient = new HttpClient({
    baseUrl: process.env.RESERVE_IPFS_BASE_URL,
    headers: {
        'content-type': 'application/json',
    },
    retryAttempts: 3,
})

const httpClient = new HttpClient({
    headers: {
        'content-type': 'application/json',
    },
    retryAttempts: 3,
})

const ipfsCIDRegExp = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})$/
const dataRegExp = /^data:(.*?),(.*)$/


async function fetchIpfs(uri: string): Promise<any | null> {
    try {
        return await ipfsClient.get(uri)
    } catch {
        return await reserveIpfsClient.get(uri)
    }
}


export async function fetchContent(
    ctx: DataHandlerContext<Store>,
    uri: string
): Promise<any | null> {
    try {
        let data: any

        let rawData = dataRegExp.exec(uri)
        if (rawData !== null) {
            let [_, mimeData] = [rawData[1], rawData[2]]
            let decodedData = decodeURIComponent(mimeData)
            console.log(decodedData)
            try {
                data = JSON.parse(decodedData)
            } catch {
                data = {content: decodedData}
            }
            return data
        }

        if (uri.startsWith('ipfs://')) {
            let path = uri.replace('ipfs://', '')
            if (path === 'undefined')
                return null
            if (uri.includes('ipfs/'))
                path = uri.replace('ipfs/', '')
            data = await fetchIpfs('ipfs/' + path)
        } else if (uri.startsWith('ar://')) {
            let path = uri.replace('ar://', '')
            if (path === 'undefined' || path === 'false')
                return null
            data = await httpClient.get('https://arweave.net/' + path)
        } else if (uri.startsWith('http://') || uri.startsWith('https://')) {
            if (uri.includes('ipfs/')) {
                data = await fetchIpfs(/ipfs\/(.*)/.exec(uri)![0])
            } else {
                data = await httpClient.get(uri).catch(() => null)
            }
        } else if (/^[a-zA-Z0-9]+$/.test(uri)) {
            data = await fetchIpfs('ipfs/' + uri)
        } else if (uri === '') {
            return null
        } else {
            throw new Error(`unexpected url "${uri}"`)
        }

        return data
    } catch (e) {
        ctx.log.warn(
            `error while fetching: ${uri}, exception: ${(e as Error).message}`
        )
    }
    return null
}

export async function fetchContentBatch(
    ctx: DataHandlerContext<Store>,
    items: string[]
): Promise<any[]> {
    let itemsMetadata: any[] = []
    for (let i = 0; i < items.length; i += IPFS_BATCH_SIZE) {
        let res = await Promise.all(
            items.slice(i, IPFS_BATCH_SIZE).map(async (uri) => fetchContent(ctx, uri))
        )
        itemsMetadata.push(...res)
    }
    return itemsMetadata
}