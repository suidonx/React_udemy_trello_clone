import { useDroppable } from "@dnd-kit/react";
import { Children } from "react";

export const Droppable = ({ id, children }) => {
  const { ref } = useDroppable({ id });

  return <div ref={ref}>{children}</div>;
};
