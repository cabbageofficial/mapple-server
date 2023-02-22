import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { parse } from "next-useragent";

@Injectable()
export class AuthGuard implements CanActivate {
    //CanActivate
    async canActivate(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context).getContext();
        // if (!ctx.headers.authorization) {
        //     return false;
        // }
        // ctx.user = await this.validToken(ctx.headers.authorization);
        console.log("cookies= ", ctx.req.cookies);
        console.log("userAgent= ", ctx.req.headers['user-agent']);
        const agent = parse(ctx.req.headers['user-agent']);
        console.log("Agent Formatted= ", agent);
        console.log("Ip Address= ", ctx.req.ip);
        return true;
    }
    //Valid token
    async validToken(auth: String) {
        console.log(auth)
    }
}