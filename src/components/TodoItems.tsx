"use client";

import { useRouter } from "next/navigation";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  removeTodo: (id: string) => void;
};

export function TodoItem(props: TodoItemProps) {
  const router = useRouter();
  return (
    <li className="flex gap-1 items-center">
      <input
        autoFocus
        id={props.id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={props.complete}
        onChange={(e) => props.toggleTodo(props.id, e.target.checked)}
      />
      <label
        htmlFor={props.id}
        className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500"
      >
        {props.title}
      </label>
      <button
        className="px-2"
        onClick={() => {
          props.removeTodo(props.id);
          router.refresh();
        }}
      >
        <img src={"remove.png"} alt="remove" height="15px" width="15px" />
      </button>
    </li>
  );
}
