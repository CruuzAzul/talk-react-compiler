import { Sandpack, type SandpackProps } from "@codesandbox/sandpack-react";

import "./codeEditor.scss";

export function CodeEditor(props: SandpackProps) {
	const firstFile = Object.keys(props?.files || {})[0];

	const options: SandpackProps["options"] = {
		...props.options,
		activeFile: firstFile,
		showRefreshButton: false,
		showTabs: true,
		closableTabs: true,
		showInlineErrors: true,
	};

	return (
		<>
			<Sandpack template="react" theme="light" {...props} options={options} />
		</>
	);
}
