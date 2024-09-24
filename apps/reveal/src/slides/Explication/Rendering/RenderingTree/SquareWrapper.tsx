import type {SquareProps} from "@/slides/Explication/Rendering/RenderingTree/Square.ts";
import React, {memo, useState} from "react";
import {Square} from "@/slides/Explication/Rendering/RenderingTree/Square.tsx";

export const SquareWrapper = ({name, children, isParentMemoized}: SquareProps) => {
	const [isMemoized, setIsMemoized] = useState(false);

	const memoizeComponent = () => {
		setIsMemoized(!isMemoized);
	};

	const MemoizedSquare = memo(Square);

	if (isMemoized) {
		return <MemoizedSquare
			name={name}
			children={children}
			onMemoizeClick={memoizeComponent}
			isMemoized={isMemoized}
			isParentMemoized={isParentMemoized ? isParentMemoized : true}/>;
	} else {
		return <Square
			name={name}
			children={children}
			onMemoizeClick={memoizeComponent}
			isMemoized={isMemoized}
			isParentMemoized={isParentMemoized}
		/>;
	}
};
