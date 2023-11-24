import { JSX } from "solid-js/jsx-runtime";

interface Props {
  children?: JSX.Element;
}

export default function Layout(props: Props) {
  return (
    <div
      id="layout"
      class="flex flex-col h-screen bg-gray-100 dark:bg-gray-800"
    >
      {props.children}
    </div>
  );
}
