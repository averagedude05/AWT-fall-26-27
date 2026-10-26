import { Injectable, NotFoundException, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Admin } from "./entities/admin.entity";
import { Repository } from "typeorm";
import { CreateAdminDto, UpdateAdminDto } from "./dto/admin.dto";

@Injectable()
export class AdminService{
    constructor(
        @InjectRepository(Admin) private readonly adminRepository: Repository<Admin>
    ){}

async getAdmin(@Param("id") id: string) {
    try{
        const user= await this.adminRepository.findOne({ where: { id:id } }); 
        return user; 
    }
    catch(error){
        throw error;
    }
}
async getAllAdmins(){
    try{
        const user= await this.adminRepository.find();
        return user;
    }
    catch(error){
        throw error; // the error will be thrown, it will be handled by nest.js
    }
}

async createAdmin(dto:CreateAdminDto){
    try{
        
        const responce=this.adminRepository.create(dto);
        return await this.adminRepository.save(responce);

    }
    catch(error){
        throw error;
    }
}
async updateAdmin(id: string, dto: UpdateAdminDto) {
  try{
    console.log("id",id);
    if (!id) {
      throw new NotFoundException("User with ID not found");
    }
    const user = await this.adminRepository.findOne({ where: { id:id } });//first id is what typeorm use to search is db
    if (!user) {
      throw new NotFoundException("User with ID not found");
    }
    Object.assign(user, dto);
    const {id: uid,created_at,updated_at, ...rest}=user;
    return await this.adminRepository.update({id:id}, rest);
  } 
  catch(error){
    throw error;
  }
}

async deleteAdmin(id: string) {
  try{
  const user = await this.adminRepository.findOne({ where: { id:id } });
if (!user) {
  throw new NotFoundException("User with ID not found");  
}
return await this.adminRepository.delete({id:id});
  } 
  catch(error){
    throw error;
  }
}}