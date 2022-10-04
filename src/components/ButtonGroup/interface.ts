import { Book } from "../../Interface/Books";

export interface ButtonGroupType{
    data: Book[];
    onChange: (id: string)=>void;
    selected_btn: string;
}