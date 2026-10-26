import { IsNotEmpty, IsOptional } from "class-validator";


export class CreateUserDto{
  
@IsNotEmpty()
name:string="";

@IsNotEmpty()
email:string="";

@IsNotEmpty()
password:string=""

@IsNotEmpty()
reserach_interests:string="";

}


export class UpdateUserDto{

  @IsOptional()
  name:string=""; //if the user not enter this then the validation will not fail

  @IsOptional()
  email:string="";

  @IsOptional()
  password:string="";

  @IsOptional()
  reserach_interests:string="";

}
