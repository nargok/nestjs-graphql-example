import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Recipe {
  @Field((type) => ID)
  id: number;

  @Field()
  title: string;
}
