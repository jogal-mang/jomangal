import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RestLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  restId: string;

  @Column()
  startTime: Date;
}
