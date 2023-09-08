module.exports = class Data1694192514561 {
    name = 'Data1694192514561'

    async up(db) {
        await db.query(`CREATE TABLE "publication" ("id" character varying NOT NULL, "profile_id" numeric NOT NULL, "pub_id" numeric NOT NULL, "variant" character varying(7) NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "creator_id" character varying, CONSTRAINT "PK_8aea8363d5213896a78d8365fab" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_c2f3555fa86a9078b94cb3d524" ON "publication" ("profile_id") `)
        await db.query(`CREATE INDEX "IDX_a9dbe00a9c99e817b7afb12ac5" ON "publication" ("pub_id") `)
        await db.query(`CREATE INDEX "IDX_bf5c347079bdf99e83a04fb409" ON "publication" ("creator_id") `)
        await db.query(`CREATE INDEX "IDX_75ac58f015ff90a2e06a91a01f" ON "publication" ("timestamp") `)
        await db.query(`CREATE TABLE "post" ("id" character varying NOT NULL, "profile_id" numeric NOT NULL, "pub_id" numeric NOT NULL, "content_uri" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "creator_id" character varying, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_d71267a40b11eac9c6b2dee901" ON "post" ("profile_id") `)
        await db.query(`CREATE INDEX "IDX_df9f973a1a260ba107d09a4e66" ON "post" ("pub_id") `)
        await db.query(`CREATE INDEX "IDX_cdb7a69f6107ba4227908d6ed5" ON "post" ("creator_id") `)
        await db.query(`CREATE INDEX "IDX_1f469063a68c898f81186c0c11" ON "post" ("timestamp") `)
        await db.query(`CREATE TABLE "mirror" ("id" character varying NOT NULL, "profile_id" numeric NOT NULL, "pub_id" numeric NOT NULL, "profile_id_pointed" numeric NOT NULL, "pub_id_pointed" numeric NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "creator_id" character varying, "creator_pointed_id" character varying, CONSTRAINT "PK_1550eca1496157edb9af20a1bdd" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_629e4f5c9a6f6ee26ca5c8f138" ON "mirror" ("profile_id") `)
        await db.query(`CREATE INDEX "IDX_595ae238f3c32ee25116ec7dd0" ON "mirror" ("pub_id") `)
        await db.query(`CREATE INDEX "IDX_6515bea657822962e71419ca3d" ON "mirror" ("creator_id") `)
        await db.query(`CREATE INDEX "IDX_2387749a31393346971f1f5227" ON "mirror" ("profile_id_pointed") `)
        await db.query(`CREATE INDEX "IDX_599464f87e294c33e7ed8b77c0" ON "mirror" ("pub_id_pointed") `)
        await db.query(`CREATE INDEX "IDX_e09c5b86e9d4c787ff453493e0" ON "mirror" ("creator_pointed_id") `)
        await db.query(`CREATE INDEX "IDX_93c8d82a0f37539d183a846a07" ON "mirror" ("timestamp") `)
        await db.query(`CREATE TABLE "comment" ("id" character varying NOT NULL, "profile_id" numeric NOT NULL, "pub_id" numeric NOT NULL, "content_uri" text NOT NULL, "profile_id_pointed" numeric NOT NULL, "pub_id_pointed" numeric NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "creator_id" character varying, "creator_pointed_id" character varying, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_46a19537464c5ffd948efda8a0" ON "comment" ("profile_id") `)
        await db.query(`CREATE INDEX "IDX_6d8ad41285cc26a7fe39ecf550" ON "comment" ("pub_id") `)
        await db.query(`CREATE INDEX "IDX_f118c3c6758ec9a020fc451082" ON "comment" ("creator_id") `)
        await db.query(`CREATE INDEX "IDX_7e4b90d171615bd2cfa4749218" ON "comment" ("profile_id_pointed") `)
        await db.query(`CREATE INDEX "IDX_22630b9c277de3339222c9fe00" ON "comment" ("pub_id_pointed") `)
        await db.query(`CREATE INDEX "IDX_7b87a05a9218a2278081a788e4" ON "comment" ("creator_pointed_id") `)
        await db.query(`CREATE INDEX "IDX_16e0a07027172478f5cbf53056" ON "comment" ("timestamp") `)
        await db.query(`CREATE TABLE "profile" ("id" character varying NOT NULL, "profile_id" numeric NOT NULL, "address" text NOT NULL, "handle" text NOT NULL, "image_uri" text NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_b0465dda30314a8786db3354a6" ON "profile" ("profile_id") `)
        await db.query(`CREATE INDEX "IDX_486591528fda0f35f22560c47f" ON "profile" ("address") `)
        await db.query(`CREATE INDEX "IDX_e1eea55c5dc00feee13279e4cc" ON "profile" ("handle") `)
        await db.query(`CREATE INDEX "IDX_0ed669a723a2a49942d30301a0" ON "profile" ("created_at") `)
        await db.query(`CREATE INDEX "IDX_1ba9ea99166dd36c702f512930" ON "profile" ("updated_at") `)
        await db.query(`CREATE TABLE "collect" ("id" character varying NOT NULL, "collector_address" text NOT NULL, "profile_id" numeric NOT NULL, "pub_id" numeric NOT NULL, "root_profile_id" numeric NOT NULL, "root_pub_id" numeric NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "collector_id" character varying, "pub_creator_id" character varying, "root_creator_id" character varying, CONSTRAINT "PK_48dc0a6d1738eb0ee8f1e13d3d1" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_4b283bb81e853c5ea147f96ec7" ON "collect" ("collector_address") `)
        await db.query(`CREATE INDEX "IDX_085b3bf104033de7d1471f1f4f" ON "collect" ("collector_id") `)
        await db.query(`CREATE INDEX "IDX_6f7aead7081c4815876262112b" ON "collect" ("profile_id") `)
        await db.query(`CREATE INDEX "IDX_cfa34e4e7816d6a781930e6f62" ON "collect" ("pub_id") `)
        await db.query(`CREATE INDEX "IDX_b4f5a98872b3adbfe766e08a18" ON "collect" ("pub_creator_id") `)
        await db.query(`CREATE INDEX "IDX_a3d194f9f55b81906d83025d14" ON "collect" ("root_profile_id") `)
        await db.query(`CREATE INDEX "IDX_cf5c48e5c588937b57e3ddb4a0" ON "collect" ("root_pub_id") `)
        await db.query(`CREATE INDEX "IDX_cdd149f105ee9757846bd5dbca" ON "collect" ("root_creator_id") `)
        await db.query(`CREATE INDEX "IDX_20e5bbb99bd24bead8e90c1814" ON "collect" ("timestamp") `)
        await db.query(`CREATE TABLE "follow" ("id" character varying NOT NULL, "follower_address" text NOT NULL, "profile_ids" jsonb NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_fda88bc28a84d2d6d06e19df6e5" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_b0721bf62c56b44978483f8893" ON "follow" ("follower_address") `)
        await db.query(`CREATE INDEX "IDX_691a2347f6876e8b22cda3017e" ON "follow" ("timestamp") `)
        await db.query(`ALTER TABLE "publication" ADD CONSTRAINT "FK_bf5c347079bdf99e83a04fb409d" FOREIGN KEY ("creator_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_cdb7a69f6107ba4227908d6ed55" FOREIGN KEY ("creator_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "mirror" ADD CONSTRAINT "FK_6515bea657822962e71419ca3da" FOREIGN KEY ("creator_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "mirror" ADD CONSTRAINT "FK_e09c5b86e9d4c787ff453493e07" FOREIGN KEY ("creator_pointed_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_f118c3c6758ec9a020fc451082c" FOREIGN KEY ("creator_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_7b87a05a9218a2278081a788e42" FOREIGN KEY ("creator_pointed_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "collect" ADD CONSTRAINT "FK_085b3bf104033de7d1471f1f4f5" FOREIGN KEY ("collector_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "collect" ADD CONSTRAINT "FK_b4f5a98872b3adbfe766e08a184" FOREIGN KEY ("pub_creator_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "collect" ADD CONSTRAINT "FK_cdd149f105ee9757846bd5dbca9" FOREIGN KEY ("root_creator_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "publication"`)
        await db.query(`DROP INDEX "public"."IDX_c2f3555fa86a9078b94cb3d524"`)
        await db.query(`DROP INDEX "public"."IDX_a9dbe00a9c99e817b7afb12ac5"`)
        await db.query(`DROP INDEX "public"."IDX_bf5c347079bdf99e83a04fb409"`)
        await db.query(`DROP INDEX "public"."IDX_75ac58f015ff90a2e06a91a01f"`)
        await db.query(`DROP TABLE "post"`)
        await db.query(`DROP INDEX "public"."IDX_d71267a40b11eac9c6b2dee901"`)
        await db.query(`DROP INDEX "public"."IDX_df9f973a1a260ba107d09a4e66"`)
        await db.query(`DROP INDEX "public"."IDX_cdb7a69f6107ba4227908d6ed5"`)
        await db.query(`DROP INDEX "public"."IDX_1f469063a68c898f81186c0c11"`)
        await db.query(`DROP TABLE "mirror"`)
        await db.query(`DROP INDEX "public"."IDX_629e4f5c9a6f6ee26ca5c8f138"`)
        await db.query(`DROP INDEX "public"."IDX_595ae238f3c32ee25116ec7dd0"`)
        await db.query(`DROP INDEX "public"."IDX_6515bea657822962e71419ca3d"`)
        await db.query(`DROP INDEX "public"."IDX_2387749a31393346971f1f5227"`)
        await db.query(`DROP INDEX "public"."IDX_599464f87e294c33e7ed8b77c0"`)
        await db.query(`DROP INDEX "public"."IDX_e09c5b86e9d4c787ff453493e0"`)
        await db.query(`DROP INDEX "public"."IDX_93c8d82a0f37539d183a846a07"`)
        await db.query(`DROP TABLE "comment"`)
        await db.query(`DROP INDEX "public"."IDX_46a19537464c5ffd948efda8a0"`)
        await db.query(`DROP INDEX "public"."IDX_6d8ad41285cc26a7fe39ecf550"`)
        await db.query(`DROP INDEX "public"."IDX_f118c3c6758ec9a020fc451082"`)
        await db.query(`DROP INDEX "public"."IDX_7e4b90d171615bd2cfa4749218"`)
        await db.query(`DROP INDEX "public"."IDX_22630b9c277de3339222c9fe00"`)
        await db.query(`DROP INDEX "public"."IDX_7b87a05a9218a2278081a788e4"`)
        await db.query(`DROP INDEX "public"."IDX_16e0a07027172478f5cbf53056"`)
        await db.query(`DROP TABLE "profile"`)
        await db.query(`DROP INDEX "public"."IDX_b0465dda30314a8786db3354a6"`)
        await db.query(`DROP INDEX "public"."IDX_486591528fda0f35f22560c47f"`)
        await db.query(`DROP INDEX "public"."IDX_e1eea55c5dc00feee13279e4cc"`)
        await db.query(`DROP INDEX "public"."IDX_0ed669a723a2a49942d30301a0"`)
        await db.query(`DROP INDEX "public"."IDX_1ba9ea99166dd36c702f512930"`)
        await db.query(`DROP TABLE "collect"`)
        await db.query(`DROP INDEX "public"."IDX_4b283bb81e853c5ea147f96ec7"`)
        await db.query(`DROP INDEX "public"."IDX_085b3bf104033de7d1471f1f4f"`)
        await db.query(`DROP INDEX "public"."IDX_6f7aead7081c4815876262112b"`)
        await db.query(`DROP INDEX "public"."IDX_cfa34e4e7816d6a781930e6f62"`)
        await db.query(`DROP INDEX "public"."IDX_b4f5a98872b3adbfe766e08a18"`)
        await db.query(`DROP INDEX "public"."IDX_a3d194f9f55b81906d83025d14"`)
        await db.query(`DROP INDEX "public"."IDX_cf5c48e5c588937b57e3ddb4a0"`)
        await db.query(`DROP INDEX "public"."IDX_cdd149f105ee9757846bd5dbca"`)
        await db.query(`DROP INDEX "public"."IDX_20e5bbb99bd24bead8e90c1814"`)
        await db.query(`DROP TABLE "follow"`)
        await db.query(`DROP INDEX "public"."IDX_b0721bf62c56b44978483f8893"`)
        await db.query(`DROP INDEX "public"."IDX_691a2347f6876e8b22cda3017e"`)
        await db.query(`ALTER TABLE "publication" DROP CONSTRAINT "FK_bf5c347079bdf99e83a04fb409d"`)
        await db.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_cdb7a69f6107ba4227908d6ed55"`)
        await db.query(`ALTER TABLE "mirror" DROP CONSTRAINT "FK_6515bea657822962e71419ca3da"`)
        await db.query(`ALTER TABLE "mirror" DROP CONSTRAINT "FK_e09c5b86e9d4c787ff453493e07"`)
        await db.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_f118c3c6758ec9a020fc451082c"`)
        await db.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_7b87a05a9218a2278081a788e42"`)
        await db.query(`ALTER TABLE "collect" DROP CONSTRAINT "FK_085b3bf104033de7d1471f1f4f5"`)
        await db.query(`ALTER TABLE "collect" DROP CONSTRAINT "FK_b4f5a98872b3adbfe766e08a184"`)
        await db.query(`ALTER TABLE "collect" DROP CONSTRAINT "FK_cdd149f105ee9757846bd5dbca9"`)
    }
}
