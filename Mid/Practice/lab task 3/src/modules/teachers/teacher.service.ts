import { Injectable, NotFoundException, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Teacher } from "./entities/teacher.entity";
import { Repository } from "typeorm";
import { CreateTeacherDto, UpdateTeacherDto } from "./dto/teacher.dto";

@Injectable()
export class TeacherService{
    constructor(
        @InjectRepository(Teacher) private readonly teacherRepository: Repository<Teacher>
    ){}

async getTeacher(@Param("id") id: string) {
    try{
        const teacher= await this.teacherRepository.findOne({ where: { id:id } }); 
        return teacher; 
    }
    catch(error){
        throw error;
    }
}
async getAllTeachers(){
    try{
        const user= await this.teacherRepository.find();
        return user;
    }
    catch(error){
        throw error; 
    }
}
async createTeacher(dto:CreateTeacherDto){
    try{
        
        const responce=this.teacherRepository.create(dto);

        return await this.teacherRepository.save(responce);

    }
    catch(error){
        throw error;
    }
}
async updateTeacher(id: string, dto: UpdateTeacherDto) {
  try{
    console.log("id",id);
    if (!id) {
      throw new NotFoundException("User with ID not found");
    }
    const user = await this.teacherRepository.findOne({ where: { id:id } });//first id is what typeorm use to search is db
    if (!user) {
      throw new NotFoundException("User with ID not found");
    }
    Object.assign(user, dto);
    const {id: uid,created_at,updated_at, ...rest}=user;
    return await this.teacherRepository.update({id:id}, rest);
  } 
  catch(error){
    throw error;
  }
}

async deleteTeacher(id: string) {
  try{
  const user = await this.teacherRepository.findOne({ where: { id:id } });
if (!user) {
  throw new NotFoundException("User with ID not found");  
}
return await this.teacherRepository.delete({id:id});
  } 
  catch(error){
    throw error;
  }
}}