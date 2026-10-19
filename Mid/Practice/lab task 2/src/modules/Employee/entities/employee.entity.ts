import{ Entity, PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn, IntegerType } from "typeorm"; 
@Entity({ name:"employees" })
export class Employee{
    @PrimaryGeneratedColumn("uuid")
    id!:string;

    @Column()
    name!:string;
    @Column()
    email!:string;
    @Column()
    password!:string;
    @Column()
    age!:number;
    @Column()
    yearsofWorking!:number;
    @CreateDateColumn()
    created_at!:Date;
    @UpdateDateColumn()
    updated_at!:Date;
}