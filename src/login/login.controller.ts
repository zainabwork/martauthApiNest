import { Controller, Post , Body, HttpStatus} from '@nestjs/common';
import {AuthService} from './auth.service'
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';

@Controller('login')
@ApiTags('login')
export class LoginController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    @ApiOperation({summary: 'user login'})
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                email: {
                    type: 'string',
                    example: 'user@example.com',
                },
                password: {
                    type: 'string',
                    example: 'password',
                },
            },
        },
    })
    @ApiResponse({status:200, description:"Successfully got token", content:{
        'application/json':{
        schema: {
            type: 'object',
            properties:{
                token:{
                    type: 'string',
                    example:'jwt_token'
                }
            }
        }
    }
}
})
    @ApiResponse({status:500, description:'Invalid credentials'})
    
    postLogin(@Body() body:any): string{
        const { email, password } = body;
        try{
            const token = this.authService.generateToken(email);
            return token;
        } catch(error){
            return `Invalid credentials ${error}`
        }
    }
}
