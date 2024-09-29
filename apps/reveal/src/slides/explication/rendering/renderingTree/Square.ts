export interface SquareProps {
	name: string;
	children?: SquareProps[];
	onMemoizeClick?: () => void;
	isMemoized?: boolean;
	isParentMemoized?: boolean;
}
