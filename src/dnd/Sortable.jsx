import { useSortable } from "@dnd-kit/react/sortable";

export function Sortable({ id, index, children }) {
  const { ref } = useSortable({ id, index });

  return <div ref={ref}>{children}</div>;
}
