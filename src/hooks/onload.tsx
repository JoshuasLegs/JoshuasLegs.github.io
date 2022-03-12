import { useEffect } from "react";

let loaded = false;
window.addEventListener("load", () => {
    loaded = true;
});

export function useOnLoad(ev: () => any) {
    useEffect(() => {
        if (loaded)
            ev();
        else {
            window.addEventListener("load", () => {
                ev();
            });
        }
    })
}