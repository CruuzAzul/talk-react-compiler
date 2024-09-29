import type {DecoratorData} from "@/components/codeEditor/codeViewer.ts";

export const decorators: DecoratorData = [
	[],
	[
		{className: "firstMultiLineHightlight", line: 6},
		{className: "multiLineHightlight", line: 7},
		{className: "multiLineHightlight", line: 8},
		{className: "lastMultiLineHightlight", line: 9},
	],
	[],
	[
		{
			className: "widget",
			elementAttributes: { "data-id": "1" },
			line: 5,
			startColumn: 19,
			endColumn: 32,
		},
	],
	[
		{
			className: "widget",
			elementAttributes: { "data-id": "1" },
			line: 5,
			startColumn: 19,
			endColumn: 32,
		},
		{
			className: "widget",
			elementAttributes: { "data-id": "2" },
			line: 13,
			startColumn: 4,
			endColumn: 17,
		},
	]
];
