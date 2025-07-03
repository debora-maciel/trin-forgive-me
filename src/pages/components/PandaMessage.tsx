import { Dialog } from "@mui/material";

interface IProps {
    setPandaMessage: (message: string) => void;
    pandaMessage: string;
    pandaMood: string;
}

export default function PandaMessage({ setPandaMessage, pandaMessage, pandaMood }: IProps) {
    return (
        <Dialog open={!!pandaMessage} onClose={() => setPandaMessage('')}>
            <div className='flex flex-col items-center justify-center p-5'>
                <h2 className='text-2xl font-bold mb-4'>Panda Arrependido</h2>
                <p className='text-base mb-4 text-left bg-gray-200 shadow-inner rounded-lg p-2'>{pandaMessage.replace(/"/g, '').replace(/'/g, '')}</p>
                <p className='text-md text-gray-500 mb-2'>Panda's mood: <span className='font-semibold'>{pandaMood}</span></p>
                <button
                    className='button text-black dark:text-white'
                    onClick={() => setPandaMessage('')}
                >
                    Close
                </button>
            </div>
        </Dialog>
    );
}