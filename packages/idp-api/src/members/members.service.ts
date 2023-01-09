import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Members} from "./members.entity";
import {DeleteResult, Repository} from "typeorm";
import {CreateMemberDto} from "./dto/create-member.dto";

@Injectable()
export class MembersService {
    constructor(
        @InjectRepository(Members)
        private membersRepository: Repository<Members>
    ) {}

    async getAll(): Promise<Members[]> {
        return await this.membersRepository.find()
    }

    async createMember(dto: CreateMemberDto): Promise<Members> {
        console.log(dto, 'member.dto.service')
        return this.membersRepository.save(dto);
    }

    async deleteMember(id: number): Promise<DeleteResult> {
        return this.membersRepository.delete({
            id
        })
    }

}
