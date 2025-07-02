import { Link } from 'react-router-dom';
import '../App.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function SendMessage() {
    return (
        <div className="flex flex-col items-start justify-center">

            <h2 className="text-3xl flex items-center justify-start gap-2">
                <Link className='text-white bg-black rounded-full text-base p-2 flex items-center justify-center' to="/">
                    <ArrowBackIosIcon fontSize='inherit' htmlColor='white' />
                    <p className='text-white'>
                    Home
                    </p>
                </Link>
                Send a message to Panda Arrependido</h2>
            <form className="p-5 rounded-lg shadow-md w-full flex flex-col justify-start gap-3" action="mailto:deh.ferre@icloud.com?subject=Message to Panda" method="post" encType="text/plain">
                <div className="flex flex-col gap-2 justify-start items-start">
                    <label htmlFor="name">Name</label>
                    <input placeholder="If ure not trin Panda dont wanna receive message :c" className="rounded-lg shadow-md border-2 px-3 py-2 w-full" type="text" name="name" />
                </div>
                <div className="flex flex-col gap-2 justify-start items-start">
                    <label htmlFor="Message">Message</label>
                    <textarea placeholder='Write a message to panda... I fear he would love to receive it from u <3' className="rounded-lg shadow-md border-2 px-3 py-2 w-full" name="Message" />
                </div>
                <div className='flex flex-col gap-2 justify-start items-start'>
                    <button className="button w-full" type="submit">
                        Send
                    </button>
                    <button className="button w-full" type="reset">
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
}