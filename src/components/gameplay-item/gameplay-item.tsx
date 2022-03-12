import "./gameplay-item.scss";

interface IProps {
    img: string,
    video: string
    className?: string
}
export function GameplayItem({ img, video, className }: IProps) {

    return (
        <video loop className={'gameplay ' + className} autoPlay muted poster={img} width={1280} height={720} controls preload="auto">
            <source src={video} />
        </video>
    )
}