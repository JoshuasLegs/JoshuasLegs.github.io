import "./gameplay-item.scss";
import Modal from 'react-modal';
import { useState } from "react";
Modal.setAppElement('#root');

interface IProps {
    img: any,
    video: any
}
export function GameplayItem({ img, video }: IProps) {

    const [modalIsOpen, setIsOpen] = useState(false);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-40%',
            transform: 'translate(-50%, -50%)',
            padding: "0",
            maxWidth: 720
        },
    };
    return (
        <div>
            <img src={img} onClick={() => setIsOpen(x => !x)} className="gameplay-item-container m-2" alt="logo" />
            <Modal
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => setIsOpen(false)}
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <video autoPlay muted controls={false} playsInline width="1280" height="720" loop>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </Modal>
        </div >
    )
}