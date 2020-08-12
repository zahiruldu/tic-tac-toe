export interface BoardTypeProps {
	board: string[];
	play: (payload: string | unknown) => string | void | Promise<void>;
}
