import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DroppableProvided,
  DropResult,
} from '@hello-pangea/dnd';
import { ReactNode } from 'react';

export interface DragDropListProps<T> {
  list: T[];
  groupId: string;
  idKey: keyof T;
  renderItem: (item: T) => ReactNode;
  onOrderChange: (itemId: string, destinationIndex: number) => void;
}

export const DragDropList = <T extends object>({
  list,
  groupId,
  idKey: key,
  renderItem,
  onOrderChange,
}: DragDropListProps<T>) => {
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const itemId = list[result.source.index][key] as string;
    const destinationIndex = result.destination.index;
    onOrderChange(itemId, destinationIndex);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={groupId}>
        {(provided: DroppableProvided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((item, index) => {
              const id = item[key] as string;
              return (
                <Draggable
                  key={id}
                  draggableId={id}
                  index={index}
                  isDragDisabled={list.length < 2}
                >
                  {(
                    provided: DraggableProvided,
                    snapshot: DraggableStateSnapshot
                  ) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`flex items-center p-3 mb-2 bg-gray-100 rounded-md transition-shadow ${
                        snapshot.isDragging ? 'shadow-lg' : ''
                      } hover:bg-sky-50 hover:text-sky-900 transition`}
                    >
                      {renderItem(item)}
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};
