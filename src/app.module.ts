import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path/posix';
import { RecipessModule } from './recipes/recipe.module';
import { Recipe } from './recipes/recipe.entity';
@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '0.0.0.0',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nest-grapqhql-dev',
      entities: [Recipe],
      synchronize: true,
    }),
    RecipessModule,
  ],
})
export class AppModule {}
