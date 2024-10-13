import { Todo } from "../../services/api";

export type AddTodoModalProps = {
  handleAddTodo: (data: Todo) => void;
  isOpen: boolean;
  onClose: () => void;
};
