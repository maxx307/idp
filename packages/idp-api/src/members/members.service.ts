import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Members} from "./members.entity";
import {DeleteResult, Repository, UpdateResult} from "typeorm";
import {CreateMemberDto} from "./dto/create-member.dto";
import {UpdateMemberDto} from "./dto/update-member.dto";

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

    async updateMember(dto: UpdateMemberDto, id: number): Promise<Members | Error> {
        const member = await this.membersRepository.findOne({
            where: {
                id
            }
        })
        if(!member){
            return new Error("Member with this ID doesn't exist")
        }
        return this.membersRepository.save({
            ...member,
            ...dto
        })
    }

    async deleteMember(id: number): Promise<DeleteResult> {
        return this.membersRepository.delete({
            id
        })
    }


}
