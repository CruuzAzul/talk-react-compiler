import {CodeViewer} from "@/components/codeEditor/CodeViewer.tsx";
import {decorators} from "@/slides/explication/rendering/useCallback/decorators.ts";
import {files} from "@/slides/explication/rendering/useCallback/files.ts";

export const UseCallbackRendering = () => {
	return (
		<CodeViewer files={files} decorators={decorators} showLineNumbers={true} />
	)
}
