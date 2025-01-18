import {useState} from 'react';



export const useModal = (defaultValue) => {

    const [isModal, setIsmodal]=useState(defaultValue);

    const isOpen=()=>setIsmodal(true);

    const isClosed=()=>setIsmodal(false);

    return [isModal, isOpen,isClosed];


}
