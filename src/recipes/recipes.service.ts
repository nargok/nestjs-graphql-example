import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './recipe.entity';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private recipesRepository: Repository<Recipe>,
  ) {}

  findAll(): Promise<Recipe[]> {
    return this.recipesRepository.find();
  }

  findOne(id: string): Promise<Recipe> {
    return this.recipesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.recipesRepository.delete(id);
  }
}
