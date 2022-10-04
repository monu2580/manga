export interface Book{
    id: number;
    title: string;
    chapter_ids: number[];
}

export interface Chapters{
    id: number;
    book: Book;
    chapter_index: number;
    pages: Page[];
    title: string;
}

export interface Page{
    id:number;
    page_index: number;
    image: Image;
}
export interface Image{
    id: number;
    width:number;
    height:number;
    created_at: string;
    updated_at: string;
    file: string;
}