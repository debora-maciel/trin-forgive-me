import { Dialog } from "@mui/material";

interface IProps {
    setPandaSong: (open: boolean) => void;
    pandaSongLink: string;
    pandaSong: boolean;
}

export default function PandaSong({ pandaSong, setPandaSong, pandaSongLink }: IProps) {
    return (
        <Dialog open={pandaSong} onClose={() => setPandaSong(false)}>
            <div className='flex flex-col items-center justify-center p-5 rounded-full'>
                <h2 className='text-2xl font-bold mb-4'>Panda's Song of the Day</h2>
                <p className='text-lg mb-4'>{pandaSong}</p>
                <iframe src={pandaSongLink}
                    width="100%" height="152" allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>
                <button
                    className='button text-black dark:text-white mt-4'
                    onClick={() => setPandaSong(false)}
                >
                    Close
                </button>
            </div>
        </Dialog>
    );
}