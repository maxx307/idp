import {Members} from "../../src/members/members.entity";
import {MembersService} from "../../src/members/members.service";
import {Repository} from "typeorm";
import {Test, TestingModule} from "@nestjs/testing";
import {getRepositoryToken} from "@nestjs/typeorm";

const membersArray: Members[] = [
    {
        id: 1,
        name: "Maksym Vasylchenko",
        age: 18,
        parents: [12]
    },
    {
        id: 2,
        name: "Oleg TestUser",
        age: 23,
        parents: []
    }
]

const oneMember = {
    id: 2,
    name: "Oleg TestUser",
    age: 23,
    parents: []
}
describe('Members Service', () => {
    let service: MembersService;
    let repository: Repository<Members>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers:[
                MembersService,
                {
                    provide: getRepositoryToken(Members),
                    useValue: {
                        find: jest.fn().mockResolvedValue(membersArray),
                        save: jest.fn().mockResolvedValue(oneMember),
                        delete: jest.fn()
                    }
                }
            ]
        }).compile()

        service = module.get<MembersService>(MembersService)
        repository = module.get<Repository<Members>>(getRepositoryToken(Members))
    })

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('createMember()', () => {
        it('should successfully create a member', () => {
            const oneUser = {
                name: "Oleg TestUser",
                age: 23,
                parents: []
            };

            expect(
                service.createMember({
                    name: "Oleg TestUser",
                    age: 23,
                    parents: []
                }),
            ).resolves.toEqual(oneUser);
        });
    });

    describe('getAll()', () => {
        it('should return an array of member', async () => {
            const users = await service.getAll();
            expect(users).toEqual(membersArray);
        });
    });

    describe('deleteMember()', () => {
        it('should call remove with the passed value', async () => {
            const removeSpy = jest.spyOn(repository, 'delete');
            const retVal = await service.deleteMember(2);
            expect(removeSpy).toBeCalledWith({
                id: 2
            });
            expect(retVal).toBeUndefined();
        });
    });
})
