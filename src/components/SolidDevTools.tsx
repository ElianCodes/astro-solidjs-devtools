import "solid-devtools";
import type { JSX } from "solid-js";

interface Props {
	children: JSX.Element;
}

export default function Counter({ children }: Props) {
	return <>{children}</>;
}
