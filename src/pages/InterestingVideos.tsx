import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

export default function InterestingVideos() {
    const interestingVideos = localStorage.getItem('interestingVideos');

    return (
        <div className='flex flex-col items-center justify-start h-screen '>
             <Link to="/" className='absolute top-0 right-0 p-4'>
                <HomeIcon fontSize='large' className='text-black dark:text-white' />
            </Link>
            <h2 className='text-2xl font-bold mb-4'>Videos</h2>
            {interestingVideos ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {JSON.parse(interestingVideos).map((video: any, index: number) => (
                        <div key={index} className='bg-gray-200 pb-20 h-[340px] dark:bg-gray-800 p-4 rounded-lg shadow-md'>
                            <h2 className='text-lg font-semibold mb-2'>{video.title}</h2>
                            <iframe width="100%" height="100%"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                                src={`https://www.youtube.com/embed/${video.link}?modestbranding=1&rel=0&showinfo=0`}>
                            </iframe>
                            <p className='text-sm text-gray-600 mt-2'>{video.description}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className='text-gray-500'>No interesting videos found.</p>
            )}
        </div>
    );
}