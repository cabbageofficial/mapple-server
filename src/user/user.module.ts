import { Module } from "@nestjs/common";

//Service and Resolver
import { UserService } from "./user.service";
import { UserResolver } from "./user.resolver";

@Module({
    providers: [UserService, UserResolver]
})
export class UserModule { }