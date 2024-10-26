import { Inject } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserInput, User } from "src/graphql";
import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver {

    constructor(
        @Inject()
        private readonly userService: UserService
    ){}

    @Query(() => [User], { name: "allUsers"})
    async user(){
        return this.userService.getUsers();
    }

    @Mutation("createUser")
    async createUser(@Args("input") input: CreateUserInput){
        return await this.userService.createUser(input);
    }
}