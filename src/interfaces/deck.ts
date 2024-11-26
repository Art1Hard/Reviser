export interface IDeck {
	id: number;
	title: string;
	words: {
		word: string;
		translate: string;
	}[];
}
