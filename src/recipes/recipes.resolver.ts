import { Resolver, Query, Args } from '@nestjs/graphql';
import { Recipe } from './recipe';
import { RecipesService } from './recipes.service';

@Resolver((of) => Recipe)
export class RecipesResolver {
  constructor(private recipesService: RecipesService) {}

  @Query((returns) => [Recipe])
  async recipes(): Promise<Recipe[]> {
    return this.recipesService.findAll();
  }
}
