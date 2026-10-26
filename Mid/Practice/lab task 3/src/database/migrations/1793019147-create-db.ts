import { MigrationInterface, QueryRunner, Table } from "typeorm";


export class CreateTable1793019147000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {  
        await queryRunner.createTable(new Table({
            name: "teachers",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default:"uuid_generate_v4()"
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "255",
                    isNullable: false
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: "password",
                    type: "varchar",
                    length: "255",
                    isNullable: false
                },
                {
                    name: "research_interests",
                    type: "text",
                    isNullable: true
                },
                {
                    name: "no_of_slot_available",
                    type: "integer",
                    isNullable: false,
                    default: 0
                },
                {
                    name: "department",
                    type: "varchar",
                    length: "255",
                    isNullable: false
                },
                {
                    name:"created_at",
                    type:"timestamp with time zone",
                    isNullable:false,
                    default: "CURRENT_TIMESTAMP(6)",
                },
                {
                     name:"updated_at",
                     type:"timestamp with time zone",
                     isNullable:false,
                     default: "CURRENT_TIMESTAMP(6)",    
                 }
            ]
        }));
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default:"uuid_generate_v4()"
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "255",
                    isNullable: false
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: "password",
                    type: "varchar",
                    length: "255",
                    isNullable: false
                },
                {
                    name: "research_interests",
                    type: "text",
                    isNullable: true
                },
                {
                    name:"created_at",
                    type:"timestamp with time zone",
                    isNullable:false,
                    default: "CURRENT_TIMESTAMP(6)",
                },
                {
                     name:"updated_at",
                     type:"timestamp with time zone",
                     isNullable:false,
                    default: "CURRENT_TIMESTAMP(6)",
                 }
            ]
        }));
        await queryRunner.createTable(new Table({
            name: "admins",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default:"uuid_generate_v4()"
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "255",
                    isNullable: false
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: "password",
                    type: "varchar",
                    length: "255",
                    isNullable: false
                },
                {
                    name:"created_at",
                    type:"timestamp with time zone",
                    isNullable:false,
                     default: "CURRENT_TIMESTAMP(6)",
                },
                {
                     name:"updated_at",
                     type:"timestamp with time zone",
                     isNullable:false,
                      default: "CURRENT_TIMESTAMP(6)",
                 }
            ]
        }));
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
        await queryRunner.dropTable("admins");
        await queryRunner.dropTable("teachers");
    }
    
}