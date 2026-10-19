import { Optional } from "@nestjs/common/decorators/core/optional.decorator";
import { IsNotEmpty } from "class-validator";


export class createEmployeeDto{
    @IsNotEmpty()
    name:string="";
    @IsNotEmpty()
    email:string="";
    @IsNotEmpty()
    password!:string;
    @IsNotEmpty()
    age!:number;    
    @IsNotEmpty()
    yearsofWorking!:number;
}
export class updateEmployeeDto{
    @Optional()
    name:string="";
    @Optional()
    email:string="";
    @Optional()
    password:string="";
    @Optional()
    age:number=0;
    @Optional()
    yearsofWorking:number=0;
}