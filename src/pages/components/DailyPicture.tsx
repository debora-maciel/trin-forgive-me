import { Dialog } from "@mui/material";
import DailyPictureSwipe, { type DailyPictureType } from "./DailyPictureSwipe";

interface IProps {
    setOpenDailyPicture: (open: boolean) => void;
    openDailyPicture: boolean;
    dailyPictures: DailyPictureType[];
}

export default function DailyPicture({ setOpenDailyPicture, dailyPictures, openDailyPicture }: IProps) {
    console.log('DailyPicture component rendered with dailyPictures:', dailyPictures);
    return (
        <Dialog fullWidth={true} open={openDailyPicture} onClose={() => setOpenDailyPicture(false)}>
            <div className='flex flex-col items-center justify-center p-5 rounded-full'>
                <h2 className='text-2xl font-bold mb-2'>Panda's Picture of the Day</h2>
                <h2 className="text-base font-light text-center text-gray-600 italic mb-2">
                    (Don’t judge the panda’s photography skill)
                </h2>

                <DailyPictureSwipe dailyPictures={dailyPictures} />
                {/* <div className="rounded-xl border border-black/10 shadow-md">
                    <img className="w-[300px] rounded-t-lg" src={`https://raw.githubusercontent.com/debora-maciel/trin-forgive-me/refs/heads/main/images/${dailyPicture}`} />
                    <p className="text-sm p-2">{dailyPictureComment}</p>
                </div> */}
                <button
                    className='button text-black dark:text-white mt-1'
                    onClick={() => setOpenDailyPicture(false)}
                >
                    Close
                </button>
            </div>

        </Dialog>
    );
}