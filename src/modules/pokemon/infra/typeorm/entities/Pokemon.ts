import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('pokemon')
export default class Pokemon {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column({
    type: 'simple-array',
  })
  abilities: string[];

  @Column({
    type: 'simple-array',
  })
  moves: string[];
}
