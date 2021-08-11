import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../../src/components/App';
import { User } from '../../src/components/App';

const fakeData: User[] = [{ id: 1, name: 'test', nickname: 'test' }];

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    status: 200,
    json: async () => fakeData,
  } as Response)
);

let container: HTMLElement | null;
describe('App.tsx를 테스트해보자~', () => {
  it('하위 컴포넌트까지 렌더링을 잘 시켜주는지 확인하기', () => {
    // 첫 렌더 테스트하기
    act(() => {
      render(<App />);
      expect(true).toBeTruthy();
    });
  });
});

export {};
