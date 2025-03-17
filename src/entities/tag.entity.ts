import { Column, Entity, ManyToOne } from 'typeorm';
import { CommonBigPKEntity } from './common/common.entity';
import { PostEntity } from './post.entity';

@Entity('Tag')
export class TagEntity extends CommonBigPKEntity {
  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  color: string;

  @ManyToOne(() => PostEntity, (post) => post.tags)
  post: PostEntity;
}
