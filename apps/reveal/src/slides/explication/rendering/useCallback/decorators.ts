import type {DecoratorData} from "@/components/codeEditor/codeViewer.ts";

export const decorators: DecoratorData = [
	[],
	[
		{className: "firstMultiLineHightlight", line: 4},
		{className: "multiLineHightlight", line: 5},
		{className: "lastMultiLineHightlight", line: 6},
	],
	[
		{className: "highlight", line: 4},
	],
	[
		{className: "errorHighlight", line: 4},
	],
	[],
	[
		{
			className: "widget",
			elementAttributes: { "data-id": "1" },
			line: 4,
			startColumn: 26,
			endColumn: 43,
		},
	],
	[
		{
			className: "widget",
			elementAttributes: { "data-id": "1" },
			line: 4,
			startColumn: 26,
			endColumn: 43,
		},
		{
			className: "widget",
			elementAttributes: { "data-id": "2" },
			line: 6,
			startColumn: 5,
			endColumn: 7,
		},
	]
];
