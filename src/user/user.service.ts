import { Inject, Injectable } from "@nestjs/common";
import { CreateUserInput, User } from "src/graphql";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class UserService {
    constructor(
        @Inject()
        private readonly prismaService: PrismaService
    ){}

    async getUsers(): Promise<User[]>{
        return await this.prismaService.user.findMany({});
    }

    async createUser(input: CreateUserInput): Promise<User>{
        return await this.prismaService.user.create({
            data: {
                name: input.name,
                email: input.email
            },
        })
    }
}