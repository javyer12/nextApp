import { BsXCircle } from 'react-icons/bs';

const Alert = ({ alert, handleClose }) => {
    if (alert && alert?.autoClose) {
        setTimeout(() => {
            handleClose();
        }, 9000);
    }
    const color = alert.type === 'error' ? "bg-red-500" : "bg-green-500";
    return (
        <>
            {alert?.active && (
                <div x-data className={` flow-root  py-3  text-start w-full rounded mb-8 ${color}`}>
                    <div className="flex  space-x-3">
                        <div className="flex-1 m-1  ml-3 leading-tight text-white text-xl p-5 ">{alert.message}</div>
                        <button type="button">
                            <BsXCircle className="w-6 h-6  mr-20  text-white" onClick={handleClose} />
                        </button>
                    </div>
                </div>
            )
            }
        </>
    );
};

export default Alert;