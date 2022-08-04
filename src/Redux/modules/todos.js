// src/modules/counter.js
const CREATE = "todo/CREATE";
const DELETE = "todo/DELETE";
const TOGGLE = "todo/TOGGLE";
// 초기 상태값
const initialState = {
  list: [
    {
      id: 0,
      title: "커피1잔",
      description: "스타벅스 가서 사오기",
      isDone: false,
    },
    {
      id: 1,
      title: "개발공부",
      description: "개인과제 진행하기",
      isDone: false,
    },
    {
      id: 2,
      title: "밥먹기",
      description: "맛있는 튀김우동 ^오^",
      isDone: true,
    },
  ],
};

//액션 생성 함수
export function createTodo(todo) {
  return { type: CREATE, todo };
}

export function deleteTodo(todo) {
  return { type: DELETE, todo };
}

export function toggleTodo(todo) {
  return { type: TOGGLE, todo };
}

// 리듀서
const todoAction = (state = initialState, action) => {
  switch (action.type) {
    case "todo/CREATE": {
      //위에 상수형을 왜 선언했니! 하하하ㅏ하 ㄱ거 갖다써라
      const todo = {
        id: state.list.at(-1).id + 1,
        title: action.todo.title,
        description: action.todo.desc,
        isDone: false,
      };
      const newList = [...state.list].concat(todo);
      return { list: newList };
    }

    case "todo/DELETE": {
      const newList = [...state.list].filter(
        (todo) => todo.id !== parseInt(action.todo.id)
      );
      return { list: newList };
    }

    case "todo/TOGGLE": {
      const newList = [...state.list].map((todo) =>
        todo.id === action.todo.id ? { ...todo, isDone: !todo.isDone } : todo
      );
      return { list: newList };
    }

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todoAction;
