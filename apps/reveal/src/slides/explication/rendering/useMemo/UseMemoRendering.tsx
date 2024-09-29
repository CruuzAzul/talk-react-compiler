import {CodeViewer} from "@/components/codeEditor/CodeViewer.tsx";
import decorators from "./data.ts";

export const UseMemoRendering = () => {
	const files = {
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

	return (
		<CodeViewer files={files} decorators={decorators} showLineNumbers={true} />
	)
}
