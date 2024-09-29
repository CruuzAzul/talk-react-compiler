import React from "react";

import {SquareWrapper} from "@/slides/explication/rendering/renderingTree/SquareWrapper.tsx";

import './childrenRendering.scss';

export function ChildrenRendering() {
	const tree = [
		{
			name: "🎸", children: [
				{
					name: "🎤", children: [
						{name: "🎵", children: []},
						{name: "🎹", children: []},
					]
				},
				{name: "🎧", children: []},
				{
					name: "🥁", children: [
						{
							name: "🎷", children: [
								{name: "🪇", children: []}
							]
						}
					]
				}
			]
		}
	];

	return (
		<div className="App">
			{tree.map((root) => (
				<SquareWrapper key={root.name} name={root.name} children={root.children} isParentMemoized={false}/>
			))}
		</div>
	);
}
