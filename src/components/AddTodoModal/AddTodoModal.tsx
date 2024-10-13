import { useState } from "react";
import { FiX } from "react-icons/fi";
import Modal from "react-modal";
import { addTodo } from "../../services/api";
import {
  Buttons,
  CancelButton,
  Header,
  Input,
  Label,
  SaveButton,
  Title,
} from "./AddTodoModal.styles";
import { AddTodoModalProps } from "./AddTodoModal.types";
import { ADD_TASK, CANCEL, CUSTOM_STYLES, NAME, SAVE } from "./constants";

const AddTodoModal = ({
  handleAddTodo,
  isOpen,
  onClose,
}: AddTodoModalProps) => {
  const [title, setTitle] = useState("");

  const handleSave = async () => {
    if (title) {
      const newTodo = await addTodo({ title, userId: 1 });

      if (newTodo) {
        handleAddTodo(newTodo);
      }

      setTitle("");
      onClose();
    }
  };

  return (
    <Modal
      ariaHideApp={false}
      contentLabel={ADD_TASK}
      isOpen={isOpen}
      onRequestClose={onClose}
      style={CUSTOM_STYLES}
    >
      <Header>
        <Title>{ADD_TASK}</Title>
        <FiX color="#999" cursor="pointer" onClick={onClose} size={25} />
      </Header>
      <form>
        <Label>
          {NAME}
          <Input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder={NAME}
            type="text"
            value={title}
          />
        </Label>
      </form>
      <Buttons>
        <CancelButton onClick={onClose}>{CANCEL}</CancelButton>
        <SaveButton onClick={handleSave}>{SAVE}</SaveButton>
      </Buttons>
    </Modal>
  );
};

export default AddTodoModal;
