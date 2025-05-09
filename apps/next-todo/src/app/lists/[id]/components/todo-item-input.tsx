export interface TodoItemInputProps {
  defaultValue?: string;
  handleValueChange: (value: string) => void;
}

export const TodoItemInput = ({
  defaultValue,
  handleValueChange,
}: TodoItemInputProps) => {
  return (
    <input
      type="text"
      className="h-6 w-full bg-transparent outline-none"
      defaultValue={defaultValue}
      autoFocus
      placeholder="Add new item"
      maxLength={64}
      onBlur={(e) => {
        handleValueChange(e.target.value);
        if (e.target.value) {
          e.target.value = '';
          e.target.focus();
        }
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          (e.target as HTMLInputElement).blur();
        }
        if (e.key === 'Escape') {
          handleValueChange('');
        }
      }}
      onSubmit={(e) => {
        e.preventDefault();
        if (!e.target) return;
        (e.target as HTMLInputElement).blur();
      }}
    />
  );
};
