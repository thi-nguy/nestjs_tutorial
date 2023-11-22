import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaService } from './prisma/prisma.service';
import { PostModule } from './post/post.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      include: [], // to tell GraphQL just search for resolvers in this subset of modules, instead of through out the whole app. (i.e. multiple endpoints, which modules should be included in which endpoints)
      // autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // sortSchema: true,
      typePaths: ['./**/*.graphql'], // tell GraphqlModule look for GraphQL schema definition that we wrote. Those files will be combined in memory and this method allows us to split schemas into several files and locate them near their resolvers.
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'), // @nestjs/graphql can automatically generate TS definitions (classes and interfaces), the `path` is to tell where to save generated TS output.
      },
    }),
    PostModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
