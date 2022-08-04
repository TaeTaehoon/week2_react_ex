// src/modules/counter.js
const CREATE = "todo/CREATE";
const DELETE = "todo/DELETE";
const TOGGLE = "todo/TOGGLE";
const DETAIL = "todo/DETAIL_BY_ID";
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
  todo: {
    id: 0,
    title: "",
    description: "",
    isDone: false,
  },
};

//액션 생성 함수
export function createTodo(payload) {
  return { type: CREATE, payload };
}

export function deleteTodo(payload) {
  return { type: DELETE, payload };
}

export function toggleTodo(payload) {
  return { type: TOGGLE, payload };
}

export function getTodoDetail(payload) {
  return { type: DETAIL, payload };
}

// 리듀서
const todoAction = (state = initialState, action) => {
  switch (action.type) {
    case CREATE: {
      //위에 상수형을 왜 선언했니! 하하하ㅏ하 ㄱ거 갖다써라
      const todo = {
        id: state.list.at(-1).id + 1,
        title: action.payload.title,
        description: action.payload.desc,
        isDone: false,
      };
      const newList = [...state.list].concat(todo);
      return { ...state, list: newList };
    }

    case DELETE: {
      const newList = [...state.list].filter(
        (todo) => todo.id !== parseInt(action.payload.id)
      );
      return { ...state, list: newList };
    }

    case TOGGLE: {
      const newList = [...state.list].map((todo) =>
        todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo
      );
      return { ...state, list: newList };
    }

    case DETAIL: {
      const newTodo = [...state.list].find(
        (todo) => todo.id === parseInt(action.payload)
      );
      console.log(newTodo);
      return { ...state, todo: newTodo };
    }

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todoAction;
