import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { User } from "../../../users/infra/typeorm/entity/User";

@Entity("bookmarks-links")
class BookmarksLinks {

    @PrimaryColumn()
    id: string

    @Column()
    title : string

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


export {BookmarksLinks}