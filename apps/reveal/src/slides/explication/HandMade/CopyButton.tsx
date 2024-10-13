import {useState} from "react";

import './copyButton.scss';

const defaultCode = `
	function TodoList({ visibility, themeColor }) {
		const [todos, setTodos] = useState(initialTodos);
		const handleChange = (todo) => setTodos(todos => getUpdated(todos, todo));
		const filteredTodos = getFiltered(todos, visibility);

		return (
			<div>
				<ul>
					{filteredTodos.map((todo) => (
						<Todo key={todo.id} todo={todo} onChange={handleChange} />
					))}
				</ul>
				<AddTodo setTodos={setTodos} themeColor={themeColor} />
			</div>
		);
	}
`;

export const CopyButton: React.FC = () => {
	const [copied, setCopied] = useState(false);

	const copy = () => {
		navigator.clipboard.writeText(defaultCode);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<button className="btn-copy" onClick={copy}>
			{
				copied ? (
					<svg className="icon check" xmlns="http://www.w3.org/2000/svg"
							 viewBox="0 0 448 512">
						<path
							d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
					</svg>
				) : (
					<svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
						<path
							d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"/>
					</svg>
				)
			}
			Copier le code de départ
		</button>
	);
}
