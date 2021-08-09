import React, {
  ChangeEventHandler,
  KeyboardEventHandler,
  useCallback,
  useReducer,
} from 'react';

interface State {
  name: string;
  nickname: string;
}

const initState: State = {
  name: '',
  nickname: '',
};

interface Props {
  getUsers: () => void;
}

const SET = 'set' as const;
const RESET = 'reset' as const;

const setAction = (payload: Partial<State>) => ({
  type: SET,
  payload,
});

const resetAction = () => ({ type: RESET });

type Action = ReturnType<typeof setAction> | ReturnType<typeof resetAction>;

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case SET:
      return {
        ...state,
        ...action.payload,
      };
    case RESET:
      return initState;
  }
}

const Join = ({ getUsers }: Props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { name, nickname } = state;

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    dispatch({
      type: 'set',
      payload: {
        [e.target.name]: e.target.value,
      },
    });
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
      .then((result) => {
        console.log(result);
        getUsers();
        dispatch({ type: 'reset' });
      });
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
