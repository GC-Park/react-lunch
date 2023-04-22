import React, { ReactChild } from 'react';

interface Props{
    class: string;
    children: ReactChild;
}

const ItemWrapper:React.FC<Props> = (props:Props)=>{
    return <div className={props.class}>{props.children}</div>;
}

export default ItemWrapper;
