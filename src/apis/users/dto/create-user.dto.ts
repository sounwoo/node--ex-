import { IsString, IsNumber } from 'class-validator';

export class CreateUserDTO {
    @IsString()
    name: string;

    @IsNumber()
    age: number;

    constructor(data: any) {
        this.name = data.name;
        this.age = data.age;
    }
}
