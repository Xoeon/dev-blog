import { Column, Entity, ManyToOne } from 'typeorm';
import { CommonBigPKEntity } from './common/common.entity';
import { PostEntity } from './post.entity';

@Entity('Series')
export class SeriesEntity extends CommonBigPKEntity {
  @Column({ type: 'varchar', nullable: false })
  name: string;

  @ManyToOne(() => PostEntity, (post) => post.series)
  post: PostEntity;
}
