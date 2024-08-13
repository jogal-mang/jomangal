import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  restId: string;

  @Column()
  duration: number;
}
