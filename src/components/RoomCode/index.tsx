import copyImg from '../../assets/images/copy.svg';
import './style.scss';
import toast, { Toaster } from 'react-hot-toast'

type RoomCodeProps = {
    code: string;
}

export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code)
        toast.success('Código da sala copiado para área de transferência!', {
            style: {
                border: '1px solid #835afd',
                padding: '10px',
                margin: '0 30px 0 0',
                color: '#29292e',
                font: 'Poppins',
            },
            iconTheme: {
                primary: '#835afd',
                secondary: '#FFFAEE',
            },
            duration: 5000,

        });


    }


    return (
        <div>
            <button className="room-code" onClick={copyRoomCodeToClipboard}>
                <div>
                    <img src={copyImg} alt="Copy room code" />
                </div>
                <span>Sala #{props.code}</span>
            </button>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>

    )
}



