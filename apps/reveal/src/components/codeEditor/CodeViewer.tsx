import {SandpackCodeViewer, type SandpackFiles, SandpackLayout, SandpackProvider} from "@codesandbox/sandpack-react";

import "./codeViewer.scss";
import {useState} from "react";
import type {DecoratorData} from "@/components/codeEditor/codeViewer.ts";

interface CodeViewerProps {
	label?: string;
	files: SandpackFiles[];
	decorators: DecoratorData;
	showLineNumbers: boolean;
}

export const CodeViewer = ({label, files, decorators, showLineNumbers}: CodeViewerProps) => {
	const [step, setStep] = useState<number>(0);

	const handleNextStep = () => {
		if (step === decorators.length - 1) return;

		setStep(step + 1);
	}

	const handlePreviousStep = () => {
		if (step === 0) return;

		setStep(step - 1);
	}

	const handleReset = () => {
		setStep(0);
	}

	return (
		<>
			<div className="code-viewer-header">
				{ label ? <span>{label}</span> : null}
				<button className="reset" onClick={handleReset}>⟲</button>
			</div>
			<section onClick={handleNextStep}>
				<SandpackProvider
					className="code-viewer"
					files={files[step]}
				>
					<SandpackLayout>
						<SandpackCodeViewer initMode="lazy" data-id="box" decorators={decorators[step]}
																showLineNumbers={showLineNumbers}/>
					</SandpackLayout>
				</SandpackProvider>
			</section>
			<div className="code-viewer-footer">
				<button onClick={handlePreviousStep}>←</button>
				<button onClick={handleNextStep}>→</button>
			</div>
		</>
	)
}
