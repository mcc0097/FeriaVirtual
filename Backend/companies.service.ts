import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  email?: string;
}
// CreateCompanyDto defined locally to fix missing module
export type CreateCompanyDto = {
  name: string;
  address?: string;
  phone?: string;
  email?: string;
};
// Replaced UpdateCompanyDto import with Partial<CreateCompanyDto> usage in update()

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private companyRepo: Repository<Company>,
  ) {}

  create(dto: CreateCompanyDto): Promise<Company> {
    const company = this.companyRepo.create(dto);
    return this.companyRepo.save(company);
  }

  findAll(): Promise<Company[]> {
    return this.companyRepo.find();
  }

  async findOne(id: number): Promise<Company> {
    const company = await this.companyRepo.findOneBy({ id });
    if (!company) throw new NotFoundException('Company not found');
    return company;
  }

  async update(id: number, dto: Partial<CreateCompanyDto>): Promise<Company> {
    const company = await this.findOne(id);
    Object.assign(company, dto);
    return this.companyRepo.save(company);
  }

  async remove(id: number): Promise<void> {
    const company = await this.findOne(id);
    await this.companyRepo.remove(company);
  }
}
