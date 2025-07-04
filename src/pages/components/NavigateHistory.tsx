import { useState, forwardRef, Fragment, useEffect } from 'react';
import type { TransitionProps } from '@mui/material/transitions';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { TextField } from '@mui/material';
import Slide from '@mui/material/Slide';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function NavigateHistory() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
        if (event.target.value === 'trinity scarf' || event.target.value === 'Trinity scarf' ||
            event.target.value === 'Trinity Scarf' || event.target.value === 'trinity scarf' ||
            event.target.value === 'trin scarf' || event.target.value === 'Trin Scarf'
        ) {
            setOpen(false);
        }
    }

    const handleClose = () => {
        window.location.href = '/';
    };

    useEffect(() => {
        if (value === '') {
            setOpen(true);
        }
    }, []);

    return (
        <Fragment>
            <Dialog
                slotProps={{
                    backdrop: {
                        className: 'custom-backdrop',
                    },
                }}
                open={open}
                slots={{
                    transition: Transition,
                }}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle className='font-bold'>
                    <div className='font-bold text-center text-xl mb-2'>
                        {"That's exclusive, what's the pasword?"}
                    </div>
                </DialogTitle>
                <DialogContent>
                    <TextField
                        placeholder='Type here...'
                        onChange={handleChange}
                        className='w-full'
                        value={value}
                        size='small'
                        autoFocus
                         />
                    <p className='text-xs mt-2 ml-2'>
                        Tip: Your name <b className='bg-gray-200 w-min font-light px-2 pb-1 rounded mx-1'>space</b>
                        First gift that i gave to u in berlin
                    </p>
                </DialogContent>
                <DialogActions className='flex justify-center'>
                    <button className='button' onClick={handleClose}>Cancel</button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}
