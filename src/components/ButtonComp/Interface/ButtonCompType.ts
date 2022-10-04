export interface ButtonCompType{
    id: number;
    title: string;
    chapter_ids?: number[];
    active: boolean;
    onClick: (id: string)=>void;
}