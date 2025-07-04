import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import type { IMessage } from '../History';
import type { DailyPictureType } from './DailyPictureSwipe';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

interface ITabHistoryProps {
    messages: IMessage[];
    dailyPictures: DailyPictureType[];
}

export default function TabHistory({ messages, dailyPictures }: ITabHistoryProps) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Box className='w-full flex items-center justify-center' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Message" {...a11yProps(0)} />
                    <Tab label="Pictures" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <div className="h-full">
                    {messages.map((message) => (
                        <div key={message.date} className="p-4 border-b border-gray-200 w-[300px]">
                            <button key={message.date} className="button">
                                <div className='text-left my-2 '>
                                    {message.message}
                                </div>

                                <div className='bg-white rounded-full py-1 px-2 border-2 border-dashed border-orange-900/20 text-sm'>
                                    {message.mood}
                                </div>
                                <div className='w-full flex items-center justify-end pr-2 pt-2 text-xs'>{message.date}</div>
                            </button>
                        </div>
                    ))}
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <div className="h-full flex flex-wrap gap-4 items-start justify-start ">
                    {dailyPictures.map((pic) => (
                        <div key={pic.date} className="border-b border-gray-200">
                            <p key={pic.date} className="">
                                <img
                                    style={{ borderRadius: '7px' }}
                                    className="w-[120px]"
                                    src={`https://raw.githubusercontent.com/debora-maciel/trin-forgive-me/refs/heads/main/images/${pic.name}`} />
                            </p>
                        </div>
                    ))}
                </div>
            </CustomTabPanel>
        </Box>
    );
}
