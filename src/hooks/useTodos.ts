import { useEffect, useState } from "react";
import { getTodos, Todo } from "../services/api";

const useTodos = ({ page }: { page: number }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [totalPages, setTotalPages] = useState<string | null>();

  useEffect(() => {
    const fetchTodos = async () => {
      setIsLoading(true);

      const response = await getTodos(page);

      if (response?.data) {
        setTodos([...todos, ...response.data]);
        setTotalPages(response?.totalCount);
      }

      setIsLoading(false);
    };

    fetchTodos();
  }, [page]);

  return { isLoading, setTodos, todos, totalPages };
};

export { useTodos };
