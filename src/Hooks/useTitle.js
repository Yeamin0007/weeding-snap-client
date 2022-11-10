import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=> {
        document.title = `${title}- Wedding-Snap`;
    }, [title])
};

export default useTitle;
