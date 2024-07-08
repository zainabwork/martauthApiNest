import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello/hello.controller';
import { LoginController } from './login/login.controller';
import {AuthService} from './login/auth.service';

@Module({
  imports: [],
  controllers: [AppController, HelloController, LoginController],
  providers: [AppService,AuthService],
})
export class AppModule {}
