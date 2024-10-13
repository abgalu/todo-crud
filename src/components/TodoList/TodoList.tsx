import { useRef, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useTodos } from "../../hooks/useTodos";
import { deleteTodo, Todo } from "../../services/api";
import { AddTodoModal } from "../AddTodoModal";
import {
  AddButton,
  Container,
  List,
  Task,
  TaskTitle,
  Title,
} from "./TodoList.styles";
import { ADD_TASK, MY_TASKS, UPLOADING } from "./constants";

const TodoList = () => {
  const listRef = useRef<HTMLUListElement | null>(null);
  const currentListRef = listRef.current;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState<number>(1);
  const { isLoading, setTodos, todos, totalPages } = useTodos({
    page,
  });

  const handleAddTodo = (data: Todo) => {
    setTodos((prevState) => [...prevState, data]);

    setTimeout(() => {
      const lastElementChild = currentListRef?.lastElementChild;
      lastElementChild?.scrollIntoView({ behavior: "smooth" });
    });
  };

  const handleClose = () => setIsModalOpen(false);

  const handleDeleteTodo = async (id: number) => {
    const deletedTodo = await deleteTodo(id);

    if (deletedTodo) {
      console.log(deletedTodo);
      setTodos((prevState) =>
        prevState.filter((todo) => todo.id !== deletedTodo)
      );
    }
  };

  const handleScroll = () => {
    if (currentListRef) {
      const { scrollTop, scrollHeight, clientHeight } = currentListRef;

      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setPage((prev) => Math.min(prev + 1, Number(totalPages)));
      }
    }
  };

  return (
    <Container>
      <Title>{MY_TASKS}</Title>
      <List onScrollCapture={handleScroll} ref={listRef}>
        {todos.map((item) => (
          <Task key={item.id}>
            <TaskTitle>{item.title}</TaskTitle>
            <FiTrash2
              color="#999"
              cursor="pointer"
              onClick={() => handleDeleteTodo(item.id)}
              size={20}
            />
          </Task>
        ))}
      </List>
      {isLoading && <p>{UPLOADING}</p>}
      <AddButton onClick={() => setIsModalOpen(true)}>{ADD_TASK}</AddButton>
      <AddTodoModal
        handleAddTodo={handleAddTodo}
        isOpen={isModalOpen}
        onClose={handleClose}
      />
    </Container>
  );
};

export default TodoList;
