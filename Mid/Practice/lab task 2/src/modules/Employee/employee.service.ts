import { In, Repository } from "typeorm";
import { Employee } from "./entities/employee.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { createEmployeeDto, updateEmployeeDto } from "./dto/employee.dto";

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee) private readonly employeeRepository: Repository<Employee>
    ){}
    async getAllEmployees(){
        try{
            const employee= await this.employeeRepository.find();
            return employee;
        } catch (error) {
            throw error; 
        }
    }

    async getEmployee(id:string){
        try{
            if(!id){
                throw new NotFoundException("Employee with ID not found");
            }
        const employee=await this.employeeRepository.findOne({where: {id:id}});
        return employee;
        } catch (error) { 
            throw error;
        }
    }

    async createEmployee(dto:createEmployeeDto){
        try{
            const responce=this.employeeRepository.create(dto);
            return await this.employeeRepository.save(responce);
        }catch(error){
            throw error;
        }
    }

    async upadateEmployee(id:string,dto:updateEmployeeDto){
        try{
            if(!id){
                throw new NotFoundException("Employee with ID not found");
            }
            const employee=await this.employeeRepository.findOne({where: {id:id}});
            if(!employee){
                throw new NotFoundException("Employee with ID not found");
            }
            Object.assign(employee,dto);
            const {id: uid, created_at,updated_at, ...rest}=employee;
            const result=await this.employeeRepository.update({id:id},rest); 
            console.log(result);
            return result;
            // return await this.employeeRepository.update({id:id},rest);  
        }
        catch(error){
            throw error;
        }
    }

    async deleteEmployee(id:string){
        try{
            const employee=await this.employeeRepository.findOne({where: {id:id}});
            if(!employee){
                throw new NotFoundException("Employee with ID not found");
            }
            return await this.employeeRepository.delete({id:id}); 
        }
        catch(error){
            throw error;
        }
    }

}

