import { User } from '@prisma/client';
import prisma from '../../config';
import { IUserCreateDTO } from './interfaces/user-service.interface';
import elastic from '../../elasticsearch';

export class UserService {
    async findUsers(): Promise<User[]> {
        const qqq = await elastic
            .search({ index: 'test' })
            .then((data) =>
                data.body.hits.hits.map((el: any) => el._source),
            );
        console.log(qqq);
        return prisma.user.findMany();
    }

    createUser({ createDTO }: IUserCreateDTO): Promise<User> {
        return prisma.user.create({
            data: {
                ...createDTO,
            },
        });
    }
}
