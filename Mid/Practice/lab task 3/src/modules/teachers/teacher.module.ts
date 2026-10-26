import { TypeOrmModule } from "@nestjs/typeorm";
import {Module} from "@nestjs/common";
import {TeacherController} from "./teacher.controller";
import {TeacherService} from "./teacher.service";
import { Teacher } from "./entities/teacher.entity";

@Module(
    {
        imports:[TypeOrmModule.forFeature([Teacher])],
        controllers:[TeacherController],
        providers:[TeacherService], 
        exports:[TeacherService]
    }
)export class TeacherModule {}