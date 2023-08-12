import { validate } from 'class-validator';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './users.service';
import { Request, Response, Router } from 'express';

class UserController {
    router = Router();
    path = '/user';

    private userService: UserService;
    constructor() {
        this.init();
        this.userService = new UserService();
    }

    init() {
        this.router.get('/', this.findUsers.bind(this));
        this.router.post('/', this.createUser.bind(this));
    }

    async findUsers(_: Request, res: Response) {
        res.status(200).json(await this.userService.findUsers());
    }

    async createUser(req: Request, res: Response) {
        const createDTO = new CreateUserDTO(req.body);
        const errors = await validate(createDTO);

        // 유효성 검사 에러 체크
        if (errors.length > 0) {
            const errorMessage = errors.map((error) => {
                const temp = error.constraints && Object.values(error.constraints);
                return `${error.property} : ${temp}`;
            });
            return res.status(400).json({ error: errorMessage });
        }

        try {
            const user = await this.userService.createUser({ createDTO });

            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ message: '서버문제' });
        }
    }
}

export default new UserController();
