import { Crypt } from 'src/common/crypt';
import { BaseEntity, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm';
import { Roles } from './role.entity';

@Entity()
@Unique(['email'])
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roleId: number;

  @ManyToOne(() => Roles)
  role: Roles;

  @Column({ unique: true })
  email: string;

  @BeforeInsert()
  emailToLowerCase() {
    this.email = this.email.toLowerCase();
  }
  
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    this.password = await Crypt.hashString(this.password);
  }

  @Column()
  password: string;


  @Column('boolean', { default: false })
  isVerified: boolean;

  @Column('boolean', { default: true })
  isActive: boolean;

  @Column({
    type: 'text',
    unique: true,
    nullable: true,
  })
  verificationCode: string;

  @Column({
    type: 'text',
    unique: true,
    nullable: true,
  })
  restPasswordCode: string;

  @Column('boolean', { default: false })
  isDeleted: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  // @OneToOne(() => DriverProfile,(driverProfile) => driverProfile.user)
  // driverProfile : DriverProfile;
}
