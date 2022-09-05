import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateBookmarksLinks1662304783282 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable( new Table({
            name:"bookmarks-links",
            columns:[
                {
                    name:"id",
                    type:"varchar"
                },
                {
                    name:"link",
                    type:"varchar"
                },
                {
                    name: "user_id",
                    type:"varchar"
                },
                {
                name :"createdAt",
                type:"timestamp",
                default:"now()"
              },
            ],
            foreignKeys : [
                {
                    name : "FKBookMarkUser",
                    referencedTableName:"users",
                    referencedColumnNames:["id"],
                    columnNames:["user_id"],
                    onDelete:"SET NULL"
                }
            ] 
        }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropDatabase("bookmarks-links")
    }

}
