export type AddTodo = {
  title: string;
  userId: number;
};

export type Todo = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getTodos = async (page: number) => {
  try {
    const response = await fetch(`${BASE_URL}/todos?_page=${page}&_limit=6`);

    const totalCount = response.headers.get("X-Total-Count");
    const data = await response.json();

    return { data, totalCount };
  } catch (error) {
    alert((error as Error).message);
  }
};

export const addTodo = async (todo: AddTodo) => {
  try {
    const response = await fetch(`${BASE_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    const data = await response.json();

    return data as Todo;
  } catch (error) {
    alert((error as Error).message);
  }
};

export const deleteTodo = async (id: number) => {
  try {
    await fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE",
    });

    return id;
  } catch (error) {
    alert((error as Error).message);
  }
};
