import {CodeViewer} from "@/components/codeEditor/CodeViewer.tsx";
import {decorators} from "@/slides/explication/rendering/useMemoChildren/decorators.ts";
import {files} from "@/slides/explication/rendering/useMemoChildren/files.ts";

export const UseMemoChildren = () => {
	return (
		<CodeViewer files={files} decorators={decorators} showLineNumbers={true} />
	)
}
