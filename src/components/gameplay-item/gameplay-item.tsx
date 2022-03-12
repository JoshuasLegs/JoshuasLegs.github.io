import { useRef } from "react";
import { useOnLoad } from "../../hooks/onload";
import "./gameplay-item.scss";

interface IProps {
    img: string,
    video: string
    className?: string
}


export function GameplayItem({ img, video, className }: IProps) {

    const ref = useRef<HTMLVideoElement>();

    useOnLoad(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (ref.current)
                    if (!entry.isIntersecting) {
                        ref.current.pause()
                    } else {
                        ref.current.play();
                    }
            });
        }, {});
        //wait for page to scroll down
        setTimeout(() => ref.current ? observer.observe(ref.current) : null, 700);
    })

    return (
        <video ref={ref as any} playsInline loop className={'gameplay ' + className} muted poster={img} width={1280} height={720} controls preload="none">
            <source src={video} />
        </video>
    )
}