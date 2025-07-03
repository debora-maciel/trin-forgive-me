import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

interface IProps {
    dailyPictures: DailyPictureType[];
}

export interface DailyPictureType {
    name: string;
    comment: string;
    date: string;
}

export default function DailyPictureSwipe({ dailyPictures }: IProps) {
    return (
        <div className="w-[300px] min-h-[400px] mx-auto p-2">
            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: false,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                tabIndex={0}
                pagination={true}
                initialSlide={dailyPictures.length - 1}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
            >
                {dailyPictures.reverse().map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="rounded-xl border border-black/10 shadow-md mb-8">
                            <img
                                style={{ borderRadius: '17px 17px 0px 0px' }}
                                className="w-[280px] mx-auto p-2"
                                src={`https://raw.githubusercontent.com/debora-maciel/trin-forgive-me/refs/heads/main/images/${item.name}`} />
                            <p className="text-sm px-2 pt-2">{item.comment}</p>
                            <p className="text-sm w-full pb-2 pr-4 text-right text-black/70 text-xs">{item.date}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};