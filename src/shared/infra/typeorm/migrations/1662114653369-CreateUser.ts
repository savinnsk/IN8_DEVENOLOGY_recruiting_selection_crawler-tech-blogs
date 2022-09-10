import { Column, MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUser1662114653369 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable( new Table({
            name: "users",
            columns:[{
                name:"id",
                type:"varchar",
                isPrimary:true
              },
              {
                name:"name",
                type:"varchar"
              },
              {
                name:"password",
                type:"varchar"
              },
              {
                name :"createdAt",
                type:"timestamp",
                default:"now()"
              },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("users")
    }

}
