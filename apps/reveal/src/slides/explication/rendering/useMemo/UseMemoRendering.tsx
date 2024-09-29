import {CodeViewer} from "@/components/codeEditor/CodeViewer.tsx";
import {decorators} from "@/slides/explication/rendering/useMemo/decorators.ts";
import {files} from "@/slides/explication/rendering/useMemo/files.ts";

export const UseMemoRendering = () => {
	return (
		<CodeViewer files={files} decorators={decorators} showLineNumbers={true} />
	)
}
