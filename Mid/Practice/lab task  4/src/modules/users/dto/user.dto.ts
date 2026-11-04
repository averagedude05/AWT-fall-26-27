import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches } from "class-validator";

export class CreateUserDto{
@IsString()
@IsNotEmpty({"message":"Name cannot be empty"})
name!:string;


@IsEmail()
@IsNotEmpty()
email!:string;

@IsString()
@Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,{"message":"Password must match"})
@IsNotEmpty()
password!:string

}


export class UpadateUserDto{
@IsString()
@IsNotEmpty({"message":"Name cannot be empty"})
name!:string;


@IsEmail()
@IsNotEmpty()
email!:string;

@IsString()
@Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,{"message":"Password must match"})
@IsNotEmpty()
password!:string

}

