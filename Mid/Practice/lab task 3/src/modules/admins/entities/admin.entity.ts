

import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({ name:"admins" })
export class Admin{
    @PrimaryGeneratedColumn("uuid")
    id!:string;
    
    @Column()
    name!:string;
    @Column()
    email!:string;
    @Column()
    password!:string;
    @CreateDateColumn()
    created_at!:Date;
    @UpdateDateColumn()
    updated_at!:Date;


    //name?:string means you can skip this property.
    




}

