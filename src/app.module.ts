import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ConfigModule } from "@nestjs/config";

//Path
import { join } from "path";

//Using Apollo Studio
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

//Modules
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      installSubscriptionHandlers: false,
      playground: false,
      path: "mapletree",
      cors: {
        credentials: true,
        origin: true
      },
      plugins: [ApolloServerPluginLandingPageLocalDefault({
        includeCookies: true
      })],
      context: ({ req }) => ({ req })
    }),
    UserModule
  ]
})
export class AppModule { }
