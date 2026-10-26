

import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({ name:"users" })
export class User{//create a class of user that represent the db table users and allow it to be imported to other files
    @PrimaryGeneratedColumn("uuid")
    id!:string;
    
    @Column()
    name!:string;
    @Column()
    email!:string;
    @Column()
    password!:string;
    @Column()
    research_interests!:string;
    @CreateDateColumn()
    created_at!:Date;
    @UpdateDateColumn()
    updated_at!:Date;


    //name?:string means you can skip this property.
    




}

