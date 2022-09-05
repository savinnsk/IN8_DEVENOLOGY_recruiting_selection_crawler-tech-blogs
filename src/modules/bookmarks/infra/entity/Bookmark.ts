import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { User } from "../../../users/infra/typeorm/entity/User";

@Entity("bookmarks-links")
class Bookmark {

    @PrimaryColumn()
    id: string

    @Column()
    label: string

    @Column()
    link : string

    @Column()
    user_id : string

    @JoinColumn({ name: "user_id" })
    @ManyToOne(() => User)
    user: User;

    @CreateDateColumn()
    created_at:Date

    constructor() {
        if(!this.id){
            this.id = uuidv4()
        }

}

}


export {Bookmark}