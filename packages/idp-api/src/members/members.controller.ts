import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {MembersService} from "./members.service";
import {Members} from "./members.entity";
import {CreateMemberDto} from "./dto/create-member.dto";
import {UpdateMemberDto} from "./dto/update-member.dto";

@ApiTags('Members')
@Controller('members')
export class MembersController{
    constructor(
        private membersService: MembersService
    ) {}

    @ApiOperation({summary: 'Get all members'})
    @ApiResponse({status: 200, type: [Members]})
    @Get()
    getAll() {
        return this.membersService.getAll();
    }

    @ApiOperation({summary: 'Create new Member'})
    @ApiResponse({status: 200, type: Members})
    @Post()
    createMember(@Body() memberDto: CreateMemberDto) {
        console.log(memberDto, 'memberDto')
        return this.membersService.createMember(memberDto)
    }

    @ApiOperation({summary: 'Update Member'})
    @ApiResponse({status: 200, type: Members})
    @Put(':id')
    updateMember(@Body() memberDto: UpdateMemberDto, @Param('id') id: number) {
        return this.membersService.updateMember(memberDto, id)
    }

    @ApiOperation({summary: 'Delete Member'})
    @ApiResponse({status: 200, type: Number})
    @Delete(':id')
    deleteMember(@Param('id') id: number) {
        return this.membersService.deleteMember(id)
    }


}
