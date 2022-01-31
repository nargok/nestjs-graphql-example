import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path/posix';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      typePaths: ['./**/*.gql'],
      // autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
  ],
})
export class AppModule {}
