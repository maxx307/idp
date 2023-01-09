import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Members} from "./members.entity";
import {MembersController} from "./members.controller";
import {MembersService} from "./members.service";

@Module({
    controllers:[MembersController],
    providers:[MembersService],
    imports: [
        TypeOrmModule.forFeature([Members])
    ],
    exports: [
        MembersService
    ]
})
export class MembersModule {}
