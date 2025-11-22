import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 15, unique: true })
  username: string;

  @Column({ length: 15 })
  password: string;

  @Column({ length: 50, nullable: true })
  token: string | null;
}
