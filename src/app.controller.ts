import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

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
    console.log(process.env)
    return `Build Time: ${process.env.BUILD_TIME} Commit Hash: ${process.env.HASH} Version: ${process.env.VERSION}`; 
  }
}
