import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class alterBookmarksAddTitle1662416445178 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn(
            "bookmarks-links",
            new TableColumn({
            name: "label",
            type: "varchar",
            isNullable: true
          })
         );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
