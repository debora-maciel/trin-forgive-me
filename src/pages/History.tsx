import { useEffect, useState } from "react"
import TabHistory from "./components/TabHistory";
import type { DailyPictureType } from "./components/DailyPictureSwipe";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import NavigateHistory from "./components/NavigateHistory";

export interface IMessage {
    date: string;
    message: string;
    mood: string;
}

export default function History() {
    const [dailyPictures, setDailyPictures] = useState<DailyPictureType[]>([])
    const [messages, setMessages] = useState<IMessage[]>([]);

    useEffect(() => {
        const messages = localStorage.getItem('pandaMessages');
        const dailyPictures = localStorage.getItem('dailyPictures');

        setDailyPictures(dailyPictures ? JSON.parse(dailyPictures) : []);
        setMessages(messages ? JSON.parse(messages) : []);
    }, [])

    return (
        <div className="flex flex-col items-center justify-start w-full h-screen min-h-max">
            <Link to="/" className='absolute top-0 right-0 p-4'>
                <HomeIcon fontSize='large' className='text-black dark:text-white' />
            </Link>
            <h2 className="text-2xl font-bold mb-4">History</h2>
            <TabHistory messages={messages} dailyPictures={dailyPictures} />
            <NavigateHistory />
        </div>
    )

}