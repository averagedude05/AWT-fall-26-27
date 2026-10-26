import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { TeacherService } from "./teacher.service";
import { CreateTeacherDto, UpdateTeacherDto } from "./dto/teacher.dto";


@Controller("teachers")
export class TeacherController{
    constructor(private readonly teacherService:TeacherService){}

    @Get()
    async getAllUser(){
        return await this.teacherService.getAllTeachers();
    }
    @Get(":id")
    async getUser(@Param("id") id:string){
        return await this.teacherService.getTeacher(id);
    }
    @Post()
    async createUser(@Body() dto:CreateTeacherDto){
        return await this.teacherService.createTeacher(dto);
    }
    
    @Patch(":id")
    async updateUser(@Param("id") id:string,@Body()dto:UpdateTeacherDto){
        return await this.teacherService.updateTeacher(id,dto);
    }

    @Delete(":id")
    async deleteUser(@Param("id") id:string){
        return await this.teacherService.deleteTeacher(id);
    }


}
    