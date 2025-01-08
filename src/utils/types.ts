export type Card = {
	label: string;
	icon: string;
	owner: CardOwner;
	show?: boolean;
};

export type CardOwner = 0 | 1 | 2;
