import { useTodos } from '@/hooks/useTodos';
import { useParams } from 'next/navigation';
import { TodoItemInput } from './todo-item-input';

export const NewTodoItem = () => {
  const { id } = useParams() as { id: string | undefined };
  const { addNew } = useTodos(id ?? '');

  const handleValueChange = (value: string) => {
    const text = value.trim();
    if (text) {
      addNew(text);
    }
  };

  return (
    <div className="flex items-center p-3 mb-2 bg-gray-100 rounded-md border-2 border-transparent focus-within:border-gray-200 transition">
      <div
        className={`flex flex-row justify-item items-center w-full cursor-pointer`}
      >
        <TodoItemInput handleValueChange={handleValueChange} />
      </div>
    </div>
  );
};
