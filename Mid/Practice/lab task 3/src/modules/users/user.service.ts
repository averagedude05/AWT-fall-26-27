import { Injectable, NotFoundException, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto, UpdateUserDto } from "./dto/user.dto";

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ){}

async getUser(@Param("id") id: string) {
    try{
        const user= await this.userRepository.findOne({ where: { id:id } }); 
        return user; 
    }
    catch(error){
        throw error;
    }
}
async getAllUsers(){
    try{
        const user= await this.userRepository.find();
        return user;
    }
    catch(error){
        throw error; // the error will be thrown, it will be handled by nest.js
    }
}

async createUser(dto:CreateUserDto){
    try{
        
        const responce=this.userRepository.create(dto);
        return await this.userRepository.save(responce);

    }
    catch(error){
        throw error;
    }
}
async updateUser(id: string, dto: UpdateUserDto) {
  try{
    console.log("id",id);
    if (!id) {
      throw new NotFoundException("User with ID not found");
    }
    const user = await this.userRepository.findOne({ where: { id:id } });//first id is what typeorm use to search is db
    if (!user) {
      throw new NotFoundException("User with ID not found");
    }
    Object.assign(user, dto);
    const {id: uid,created_at,updated_at, ...rest}=user;
    return await this.userRepository.update({id:id}, rest);
  } 
  catch(error){
    throw error;
  }
}

async deleteUser(id: string) {
  try{
  const user = await this.userRepository.findOne({ where: { id:id } });
if (!user) {
  throw new NotFoundException("User with ID not found");  
}
return await this.userRepository.delete({id:id});
  } 
  catch(error){
    throw error;
  }
}}