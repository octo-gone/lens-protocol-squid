import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Post} from "./post.model"

@Entity_()
export class Profile {
    constructor(props?: Partial<Profile>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    profileId!: bigint

    @Index_()
    @Column_("text", {nullable: false})
    address!: string

    @Index_()
    @Column_("text", {nullable: false})
    handle!: string

    @Column_("text", {nullable: false})
    imageUri!: string

    @OneToMany_(() => Post, e => e.creator)
    posts!: Post[]

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    updatedAt!: Date
}
