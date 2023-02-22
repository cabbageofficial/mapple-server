import { Resolver, Query, Mutation, Context } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { Request } from 'express';

//Service
import { UserService } from "./user.service";


//Auth Guards
import { AuthGuard } from "src/auth/auth.guards";


@Resolver()
export class UserResolver {
    //Constructor
    constructor(
        private readonly userService: UserService
    ) { }

    //Get
    @Query(() => String, { name: "getUsers" })
    gets() {
        return this.userService.gets();
    }

    @Mutation(() => String, { name: "login" })
    login(
        @Context("req") req: Request
    ) {
        req.res.cookie('token', "hellowordamikemonaci", {
            httpOnly: true,
            secure: true,
            sameSite: "none"
        });
        return "Cookies sent Successfully!"
    }

    @Mutation(() => String, { name: "signup" })
    @UseGuards(AuthGuard)
    signup(
        @Context("req") req: Request
    ) {
        return "This is signup"
    }
}