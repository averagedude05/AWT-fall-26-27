import { IsNotEmpty, IsOptional } from "class-validator";


export class CreateAdminDto{
  
@IsNotEmpty()
name:string="";

@IsNotEmpty()
email:string="";

@IsNotEmpty()
password:string=""



}


export class UpdateAdminDto{

  @IsOptional()
  name:string=""; //if the user not enter this then the validation will not fail

  @IsOptional()
  email:string="";

  @IsOptional()
  password:string="";



}
