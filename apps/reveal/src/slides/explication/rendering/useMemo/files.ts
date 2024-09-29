import type {SandpackFiles} from "@codesandbox/sandpack-react";

const codeWithoutMemo: SandpackFiles = {
	"index.js": `function App() {
	const [selectedNum, setSelectedNum] = React.useState(100);
	const time = useTime();

	// Calculate all of the prime numbers.
	const allPrimes = [];
	for (let counter = 2; counter < selectedNum; counter++) {
		if (isPrime(counter)) allPrimes.push(counter);
	}

	return (
		<>
			{format(time, 'hh:mm:ss a')}
			{...}
			{allPrimes.join(', ')}
		</>
	);
}`,
};

const codeWithMemo: SandpackFiles = {
	"index.js": `function App() {
	const [selectedNum, setSelectedNum] = React.useState(100);
	const time = useTime();

	const allPrimes = React.useMemo(() => {
		const result = [];
		for (let counter = 2; counter < selectedNum; counter++) {
			if (isPrime(counter)) {
				result.push(counter);
			}
		}
		return result;
	}, [selectedNum]);

	return (...);
}`,
}

export const files: SandpackFiles[] = [codeWithoutMemo, codeWithoutMemo, codeWithMemo, codeWithMemo, codeWithMemo];
