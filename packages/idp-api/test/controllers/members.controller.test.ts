import {CreateMemberDto} from "../../src/members/dto/create-member.dto";
import {MembersController} from "../../src/members/members.controller";
import {MembersService} from "../../src/members/members.service";
import {Test, TestingModule} from "@nestjs/testing";
import {Members} from "../../src/members/members.entity";
import {UpdateMemberDto} from "../../src/members/dto/update-member.dto";

const createMemberDto: CreateMemberDto = {
    name: 'Maksym Vasylchenko',
    age: 19,
    parents: []
};

const updateMemberDto: UpdateMemberDto = {
    age: 19
}

describe('Members Controller', () => {
    let membersController: MembersController;
    let membersService: MembersService;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [MembersController],
            providers: [
                MembersService,
                {
                    provide: MembersService,
                    useValue: {
                        createMember: jest
                            .fn()
                            .mockImplementation((member: CreateMemberDto) =>
                                Promise.resolve({id: 1, ...member})
                            ),
                        getAll: jest
                            .fn()
                            .mockResolvedValue([
                                {
                                    name: 'Maksym Vasylchenko',
                                    age: 19,
                                    parents: []
                                }
                            ]),
                        updateMember: jest
                            .fn()
                            .mockResolvedValue({
                                name: 'Maksym Vasylchenko',
                                age: 19,
                                parents: []
                            }),
                        deleteMember: jest.fn()

                    }
                }
            ]
        }).compile()

        membersController = app.get<MembersController>(MembersController)
        membersService = app.get<MembersService>(MembersService)
    })

    it('should be defined', () => {
        expect(membersController).toBeDefined();
    });

    describe('createMember()', () => {
        it('should create a member', () => {
            membersController.createMember(createMemberDto);
            expect(membersController.createMember(createMemberDto)).resolves.toEqual({
                id: '1',
                ...createMemberDto,
            });
            expect(membersService.createMember).toHaveBeenCalledWith(createMemberDto);
        });
    });

    describe('updateMember()', () => {
        it('should update a member', () => {
            const result = membersController.updateMember(updateMemberDto, 1)

            expect(result).resolves.toEqual({
                id: 1,
                ...updateMemberDto
            })

            expect(membersService.updateMember).toHaveBeenCalledWith(updateMemberDto, 1);

        })
    })

    describe('getAll()', () => {
        it('should find all members ', () => {
            membersController.getAll();
            expect(membersService.getAll).toHaveBeenCalled();
        });
    });

    describe('deleteMember()', () => {
        it('should remove the user', () => {
            membersController.deleteMember(2);
            expect(membersService.deleteMember).toHaveBeenCalled();
        });
    });
})
