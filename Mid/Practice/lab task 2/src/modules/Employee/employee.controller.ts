import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { EmployeeService  } from "./employee.service";
import {  createEmployeeDto, updateEmployeeDto } from "./dto/employee.dto";

@Controller("employees")
export class EmployeeController {
  constructor(private readonly userService: EmployeeService) {}

  @Get()
  async getEmployees() {
    return await this.userService.getAllEmployees();
  }

  @Get(":id")
  async getEmployee(@Param("id") id: string) {
    return await this.userService.getEmployee(id);
  }
  
  @Post()
  async createEmployee(@Body() dto: createEmployeeDto) {
    return await this.userService.createEmployee(dto);
  }

  @Patch(":id")
  async updateEmployee(@Param("id") id: string, @Body() dto: updateEmployeeDto) {
    return await this.userService.upadateEmployee(id, dto);
  }

  @Delete(":id")
  async deleteEmployee(@Param("id") id: string) {
    return await this.userService.deleteEmployee(id);
  }
}
