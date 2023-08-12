import { User } from '@prisma/client';
import prisma from '../../config';
import { Request } from 'express';
import { IUserCreateDTO } from './interfaces/user-service.interface';

export class UserService {
    findUsers(): Promise<User[]> {
        return prisma.user.findMany();
    }

    createUser({ createDTO }: IUserCreateDTO): Promise<User> {
        console.log(createDTO);
        return prisma.user.create({
            data: {
                ...createDTO,
            },
        });
    }
}
