import { ArrayUserRepository } from '../../src/repositories/array.user.repository';

const userRepository = new ArrayUserRepository();
describe('array user repository를 테스트합니다.', () => {
  it('생성이 잘될까요?', () => {
    const newUser = userRepository.createUser({
      name: 'hi',
      nickname: 'testnickname',
    });

    expect(newUser.id).toBe(1);
  });
});
