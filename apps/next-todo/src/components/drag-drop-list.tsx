import {
  DragDropContext,
  Droppable,
  DroppableProvided,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  DropResult,
} from '@hello-pangea/dnd';
import { ReactNode, useState } from 'react';

export interface DragDropListProps<T> {
  list: T[];
  groupId: string;
  idKey: keyof T;
  renderItem: (item: T) => ReactNode;
  onOrderChange: (itemId: string, destinationIndex: number) => void;
  itemDragEnabled?: (item: T) => boolean;
}

export const DragDropList = <T extends object>({
  list,
  groupId,
  idKey: key,
  renderItem,
  onOrderChange,
  itemDragEnabled,
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
                  isDragDisabled={
                    list.length < 2 || !(itemDragEnabled?.(item) ?? true)
                  }
                >
                  {(
                    provided: DraggableProvided,
                    snapshot: DraggableStateSnapshot
                  ) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`flex items-center p-3 mb-2 bg-gray-100 rounded transition-shadow ${
                        snapshot.isDragging ? 'shadow-lg' : ''
                      }`}
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
