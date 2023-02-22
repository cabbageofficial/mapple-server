import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    //Get Users
    gets() {
        return "This is from user";
    }
}