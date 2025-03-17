import { Column, Entity, OneToMany } from 'typeorm';
import { CommonBigPKEntity } from './common/common.entity';
import { TagEntity } from './tag.entity';
import { SeriesEntity } from './series.entity';

@Entity('Post')
export class PostEntity extends CommonBigPKEntity {
  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: false })
  summary: string;

  @Column({ type: 'text', nullable: false })
  content: string;

  @Column({ type: 'varchar', nullable: false })
  date: string;

  @OneToMany(() => TagEntity, (tag) => tag.post)
  tags: TagEntity[];

  @OneToMany(() => SeriesEntity, (series) => series.post)
  series: SeriesEntity[];
}
