import { Dialog } from "@mui/material";

interface IProps {
    setOpenDailyPicture: (open: boolean) => void;
    openDailyPicture: boolean;
    dailyPicture: string;
    dailyPictureComment: string;
}

export default function DailyPicture({ setOpenDailyPicture, dailyPicture, openDailyPicture, dailyPictureComment }: IProps) {
    return (
        <Dialog open={openDailyPicture} onClose={() => setOpenDailyPicture(false)}>
            <div className='flex flex-col items-center justify-center p-5 rounded-full'>
                <h2 className='text-2xl font-bold mb-4'>Panda's Picture of the Day</h2>
                <div className="rounded-xl border border-black/10 shadow-md">
                    <img className="w-[300px] rounded-t-lg" src={`https://raw.githubusercontent.com/debora-maciel/trin-forgive-me/refs/heads/main/images/${dailyPicture}`} />
                    <p className="text-sm p-2">{dailyPictureComment}</p>
                </div>
                <button
                    className='button text-black dark:text-white mt-4'
                    onClick={() => setOpenDailyPicture(false)}
                >
                    Close
                </button>
            </div>
        </Dialog>
    );
}