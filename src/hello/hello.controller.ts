import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('hello')
@ApiTags('hello')
export class HelloController {
    @Get()
    @ApiOperation({summary: 'Greeting request'})
    @ApiResponse({status:200, description:'Greetings sent successfully'})
    
    getHello(): string {
        return 'Hello Zainab'
    }
}
