import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path/posix';
import { RecipesResolver } from './recipes/recipes.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
  ],
  providers: [RecipesResolver],
})
export class AppModule {}
