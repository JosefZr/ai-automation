import FormModal from "@/components/Modals/from-modal";
import { useEffect, useState } from "react";


export const ModalProvider = ({ children }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])
    if (!isMounted) {
        return null;
    }

    return (
        <div >
            {children}
            <FormModal />
        </div>
    )
}