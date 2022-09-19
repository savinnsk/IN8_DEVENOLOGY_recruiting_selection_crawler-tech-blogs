import { Column, MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class alterBookmarksAddEmailColumn1663025712038 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn("bookmarks-links" , new TableColumn(
            {
                name:"email",
                type:"varchar"
            }
            ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn("users" , "email")
    }

}
