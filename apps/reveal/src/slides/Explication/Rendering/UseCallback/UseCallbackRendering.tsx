import {CodeViewer} from "@/components/CodeEditor/CodeViewer.tsx";
import decorators from "./data.ts";

export const UseCallbackRendering = () => {
	const files = {
		"index.js": `const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}];

export default function List() {
  const [text, setText] = useState("")
  const listItems = people.map(person =>
    <li>{person}</li>
  );
  return <ul>{listItems}</ul>;
}`,
	};

	return (
		<CodeViewer files={files} decorators={decorators} showLineNumbers={true} />
	)
}
