import { Resolver, Query, Args } from '@nestjs/graphql';
import { Recipe } from './recipe'

const recipeTable = [
  {
    id: '1',
    title: '鯖の味噌煮',
  },
  {
    id: '2',
    title: '鳥の唐揚げ',
  },
  {
    id: '3',
    title: 'キムチ鍋',
  },
];

@Resolver(of => Recipe)
export class RecipesResolver {
  @Query(returns => [Recipe])
  async recipes(): Promise<Recipe[]> {
    return recipeTable;
  }
}
