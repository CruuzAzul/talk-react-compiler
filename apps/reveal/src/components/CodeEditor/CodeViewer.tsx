import {SandpackCodeViewer, type SandpackFiles, SandpackLayout, SandpackProvider} from "@codesandbox/sandpack-react";

import "./codeViewer.scss";

interface CodeViewerProps {
	files: SandpackFiles;
	decorators: any[];
	showLineNumbers: boolean;
}

export const CodeViewer = ({files, decorators, showLineNumbers}: CodeViewerProps) => {
	return (
		<SandpackProvider
			className="code-editor"
			files={files}
		>
			<SandpackLayout>
				<SandpackCodeViewer decorators={decorators} showLineNumbers={showLineNumbers}/>
			</SandpackLayout>
		</SandpackProvider>
	)
}
