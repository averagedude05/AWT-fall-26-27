import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString, Length, Matches, Max, Min } from "class-validator";
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

@IsNumber()
@Min(18)
@Max(60)
age!:number;


@IsString()
@Matches(/^01/,{"message":"phone number must be valid"})
@Length(11,11)
phone!:string;

@IsString()
@IsIn(["teacher","student"],{"message":"account type must either me teacher or student"})
accounttype!:string;

@IsOptional()
@IsString()
@Length(10,)
address!:string;

}

export class UpadateUserDto{
@IsOptional()
@IsString()
name!:string;


@IsOptional()
@IsEmail()
email!:string;

@IsOptional()
@IsString()
@Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,{"message":"Password must match"})
password!:string

@IsOptional()
@IsNumber()
@Min(18)
@Max(60)
age!:number;



@IsString()
@Matches(/^01/,{"message":"phone number must be valid"})
@Length(11,11)
phone!:string;

@IsOptional()
@IsString()
@IsIn(["teacher","student"],{"message":"account type must either me teacher or student"})
accounttype!:string;

@IsOptional()
@IsString()
@Length(10,)
address!:string;

}

