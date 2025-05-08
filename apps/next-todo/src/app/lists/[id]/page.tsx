'use client';

import { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult, DroppableProvided, DraggableProvided, DraggableStateSnapshot } from '@hello-pangea/dnd';

const initialTodos = [
  { id: '1', text: 'Buy groceries', checked: false },
  { id: '2', text: 'Walk the dog', checked: false },
  { id: '3', text: 'Read a book', checked: false },
];

export default function ListPage() {
  const [todos, setTodos] = useState(initialTodos);

  const handleCheck = (id: string) => {
    setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo));
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTodos(items);
  };

  return (
    <main className="flex flex-col gap-2 md:gap-8 min-h-screen items-center md:justify-center">
      <div className="w-full bg-white rounded-lg shadow-md p-6 max-w-md md:max-w-xl">
        <h1 className="text-sm font-bold mb-6 text-gray-500">TO-DOS</h1>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="todos">
            {(provided: DroppableProvided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {todos.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`flex items-center p-3 mb-2 bg-gray-100 rounded transition-shadow ${snapshot.isDragging ? 'shadow-lg' : ''}`}
                      >
                        <input
                          type="checkbox"
                          checked={todo.checked}
                          onChange={() => handleCheck(todo.id)}
                          className="mr-3 h-5 w-5"
                        />
                        <span className={todo.checked ? 'line-through text-gray-400' : ''}>{todo.text}</span>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      <div className="w-full bg-white rounded-lg shadow-md p-6 max-w-md md:max-w-xl">
        <h1 className="text-sm font-bold mb-6 text-gray-500">DONE</h1>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="todos">
            {(provided: DroppableProvided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {todos.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`flex items-center p-3 mb-2 bg-gray-100 rounded transition-shadow ${snapshot.isDragging ? 'shadow-lg' : ''}`}
                      >
                        <input
                          type="checkbox"
                          checked={todo.checked}
                          onChange={() => handleCheck(todo.id)}
                          className="mr-3 h-5 w-5"
                        />
                        <span className={todo.checked ? 'line-through text-gray-400' : ''}>{todo.text}</span>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </main>
  );
} 