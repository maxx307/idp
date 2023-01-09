import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Members {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("integer")
    age: number;

    @Column({type: "integer", array: true, default: []})
    parents: number[];
}
