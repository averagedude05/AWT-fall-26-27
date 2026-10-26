import { IsNotEmpty, IsOptional } from "class-validator";



export class CreateTeacherDto{
  
@IsNotEmpty()
name:string="";

@IsNotEmpty()
email:string="";

@IsNotEmpty()
password:string=""

@IsNotEmpty()
reserach_interests:string="";

@IsNotEmpty()
no_of_slot_available:number=0;  

@IsNotEmpty()
department:string="";

}


export class UpdateTeacherDto{
  @IsOptional()
  name:string=""; 

  @IsOptional()
  email:string="";

  @IsOptional()
  password:string="";

  @IsOptional()
  reserach_interests:string="";

  @IsOptional()
  no_of_slot_available:number=0;  

  @IsOptional()
  department:string="";

}
