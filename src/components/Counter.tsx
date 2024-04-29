import { createSignal } from "solid-js";
import "solid-devtools";
import CountButton from "./CountButton";

export default function Counter() {
	const [count, setCount] = createSignal(0);

	return (
		<>
			<p>Count: {count()}</p>
			<CountButton action={() => setCount(count() + 1)}>Increment</CountButton>
			<CountButton action={() => setCount(count() - 1)}>Decrement</CountButton>
		</>
	);
}
