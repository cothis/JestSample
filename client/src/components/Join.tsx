import React, {
  ChangeEventHandler,
  KeyboardEventHandler,
  ReactEventHandler,
  useCallback,
  useReducer,
} from 'react';

interface IState {
  name: string;
  nickname: string;
}

function reducer(state: IState, action: HTMLInputElement) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Join = () => {
  const [state, dispatch] = useReducer(reducer, { name: '', nickname: '' });
  const { name, nickname } = state;

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    dispatch(e.target);
  }, []);

  const onClick = useCallback(() => {
    fetch('http://localhost:3000/api/users', {
      method: 'post',
      body: JSON.stringify(state),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(console.log);
  }, [state]);

  const onKeyPress: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.key === 'Enter') onClick();
    },
    [state]
  );

  return (
    <div>
      <input type="text" name="name" value={name} onChange={onChange} />
      <input
        type="text"
        name="nickname"
        value={nickname}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>가입</button>
    </div>
  );
};

export default Join;
