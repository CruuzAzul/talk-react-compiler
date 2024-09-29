import type {SandpackFiles} from "@codesandbox/sandpack-react";

type DecoratorHighlight = {
	className: string;
	line: number;
};

type DecoratorWidget = {
	className: "widget";
	elementAttributes: { "data-id": string };
	line: number;
	startColumn: number;
	endColumn: number;
};

export type Decorator = DecoratorHighlight[] | DecoratorWidget[] | [];

export type DecoratorData = Decorator[];

export type Files = SandpackFiles[];
