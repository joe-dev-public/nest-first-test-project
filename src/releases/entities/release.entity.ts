import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Release {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  artist: string;

  @Column()
  title: string;

  @Column()
  created_at: number;
}
