import type { JSX } from "solid-js";

// This is probably not how you would do it in a real app, but it's a simple showcasing example.
interface CountButtonProps {
	action: () => void;
	children: JSX.Element;
}

export default function CountButton({ action, children }: CountButtonProps) {
	return (
		<button type="button" onClick={action}>
			{children}
		</button>
	);
}
