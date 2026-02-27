import { useDraggable } from "@dnd-kit/react";

export const Draggable = ({ id, children }) => {
  const { ref } = useDraggable({
    id,
  });

  return <div ref={ref}>{children}</div>;
};
