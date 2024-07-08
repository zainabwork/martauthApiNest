import { Injectable } from "@nestjs/common"
const jwt = require('jsonwebtoken')

@Injectable()
export class AuthService {
    private readonly secret = process.env.JWT_SECRET;
    constructor(){
        // console.log("secret",this.secret)
    }
    generateToken(email:string): string {
        return jwt.sign({email},this.secret,{expiresIn:'1h'});
    }
}