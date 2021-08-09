import { UserRepository } from '../../src/repositories/user.repository';
import { UserService } from '../../src/services/user.service';

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

describe('유저 서비스 테스트입니다.', () => {
  beforeAll(() => {
    console.log('테스트 시작합니당');
  });

  afterEach(() => {
    // 각 테스트 후 repository를 초기화 합니다.
    userRepository.clear();
  });

  it('데이터를 생성하면 아이디가 부여되야 합니다.', () => {
    //given
    const user = { name: 'test', nickname: 'testnickname' };

    //when
    const newUser = userService.createUser(user);

    //then
    expect(newUser.id).toBe(1);
    expect(newUser.name).toBe(user.name);
    expect(newUser.nickname).toBe(user.nickname);
  });

  it('두명 생성하면 1번, 2번 아이디가 들어가야합니다.', () => {
    //given
    const user1 = { name: 'test1', nickname: 'nickname1' };
    const user2 = { name: 'test2', nickname: 'nickname2' };

    //when
    const newUser1 = userService.createUser(user1);
    const newUser2 = userService.createUser(user2);

    //then
    expect(newUser1.id).toBe(1);
    expect(newUser2.id).toBe(2);
  });

  it('전체조회가 잘 될까요? 2명을 입력한 후, 2가 나와야 합니다.', () => {
    //given
    const user1 = { name: 'test1', nickname: 'nickname1' };
    const user2 = { name: 'test2', nickname: 'nickname2' };

    const newUser1 = userService.createUser(user1);
    const newUser2 = userService.createUser(user2);

    //when
    const result = userService.findAll();

    //then
    expect(result).toHaveLength(2);
  });
});
