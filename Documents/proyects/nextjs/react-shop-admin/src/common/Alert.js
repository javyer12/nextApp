import { BsXCircle } from 'react-icons/bs';

const Alert = ({ alert, handleClose }) => {
    if (alert && alert?.autoClose) {
        setTimeout(() => {
            handleClose();
        }, 9000);
    }

    return (
        <>
            {alert?.active && (
                <div x-data className=' p-5 py-3 bg-gray-900  text-center w-full rounded mb-8'>
                    <div className="flex p-5 space-x-3">
                        <div className="flex-1 m-5 leading-tight text-sm text-white font-medium p-5 ">{alert.message}</div>
                        <button type="button">
                            <BsXCircle className="w-6 h-6  p-5  text-white" onClick={handleClose} />
                        </button>
                    </div>
                </div>
            )
            }
        </>
    );
};

export default Alert;