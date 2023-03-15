import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) { }

  @Get('create-user')
  async createUser() {
    await this.userService.createUser({
      name: `User anem ${Math.random()}`,
      email: `useremail@${Math.random()}.com`,
    });
    return 'User created';
  }

  @Get('list')
  userList() {
    return this.userService.users({});
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello/:name')
  sayHello(@Param('name') name: string) {
    return `Welcome to you ${name}`;
  }

  @Get('build')
  getBuild() {
    console.log(process.env);
    return `Build Time: ${process.env.BUILD_TIME} Commit Hash: ${process.env.HASH} Version: ${process.env.VERSION} change`;
  }
}
