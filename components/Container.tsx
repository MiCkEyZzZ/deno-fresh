import { ComponentChildren } from "preact";

type PropType = {
  children: ComponentChildren;
};

export default function Container(props: PropType) {
  return <div class="w-full max-w-screen-md mx-auto px-4">{props.children}
  </div>;
}
