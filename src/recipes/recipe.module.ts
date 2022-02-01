import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.entity';
import { RecipesResolver } from './recipes.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe])],
  providers: [RecipesResolver, RecipesService],
})
export class RecipessModule {}
