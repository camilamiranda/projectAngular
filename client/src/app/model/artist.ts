import { Album } from "./album"

export class Artist {
    id: number;
    name: string;
    albums: Album[];
}

export const ARTISTS: Artist[] = [
    { id: 1, name: 'The Black Keys', albums: [] },
    { id: 2, name: 'Max Frost', albums: [] },
];