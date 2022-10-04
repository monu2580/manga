import React, { useEffect, useState } from 'react'
import { Book } from '../../Interface/Books';
import ButtonComp from '../ButtonComp'
import { ButtonCompType } from '../ButtonComp/Interface/ButtonCompType'
import { ButtonGroupType } from './interface';

const createButtonProps = (books:Book[], onClick:(id: string)=> void, key: string)=>{
    return books.map( (book )=>({...book, active:book.title===key, onClick}));
}

function ButtonGroup({ data , onChange, selected_btn}:ButtonGroupType) {
    const [btnPorps, setBtnPorps] = useState<ButtonCompType[]>([])
    useEffect(() => {
        const btnProps = createButtonProps(data,onChange,selected_btn) 
        setBtnPorps(btnProps);
    }, [data, onChange, selected_btn])
    
    return (
        <div style={{padding:'10px 10px'}}>
            {btnPorps.map(({title, id, active, onClick}:ButtonCompType)=>(
                <ButtonComp key={id}  title={title} id={id} active={active} onClick={onClick}/>
            ))}
        </div>
    )
}

export default ButtonGroup