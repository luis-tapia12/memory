export type Card = {
    label: string;
    icon: string;
    owner: CardOwner;
    show?: false
}

export type CardOwner = 0 | 1 | 2;