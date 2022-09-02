import {Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"

@Entity('users')

class User {

    @PrimaryColumn()
    id:string

    @Column()
    name:string

    @CreateDateColumn()
    created_at:Date

    constructor() {
        
    }
}

export {User}