import React, {useEffect, useState} from "react";
import type {SquareProps} from "@/slides/Explication/Rendering/RenderingTree/Square.ts";
import {SquareWrapper} from "@/slides/Explication/Rendering/RenderingTree/SquareWrapper.tsx";

export const Square = ({name, children, onMemoizeClick, isMemoized, isParentMemoized}: SquareProps) => {
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		setIsClicked(!isClicked);
	};

	const handleDoubleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		onMemoizeClick && onMemoizeClick();
	};

	useEffect(() => {
		const squareElement = document.getElementById(name);

		if (squareElement && !isMemoized && !isParentMemoized) {
			squareElement.classList.add('highlight');
			const timeout = setTimeout(() => {
				squareElement.classList.remove('highlight');
			}, 500);

			return () => clearTimeout(timeout);
		}
	});

	return (
		<div className={`square square-${name} ${isMemoized ? 'square-memo' : ''}`} id={name}
				 onDoubleClick={handleDoubleClick}
				 onClick={handleClick}>
			<span>{name}</span>
			<div className="children-container">
				{children && children.map((child) => (
					<SquareWrapper
						key={child.name}
						name={child.name}
						children={child.children!}
						onMemoizeClick={onMemoizeClick}
						isParentMemoized={isParentMemoized}
					/>
				))}
			</div>
		</div>
	);
};
