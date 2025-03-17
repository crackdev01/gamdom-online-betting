import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('sports_events')
export class SportsEvent extends BaseEntity {
  @Column({ name: 'name' })
  name!: string;

  @Column({ name: 'description', nullable: true })
  description?: string;

  @Column({ name: 'odds', type: 'decimal', precision: 10, scale: 2 })
  odds: number;
}
