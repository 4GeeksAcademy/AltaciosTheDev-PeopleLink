import React, { useEffect, useContext, useState } from 'react'
import { Context } from "../../store/appContext";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectCreative, Pagination } from 'swiper/modules';
import 'swiper/css/effect-creative';
import PendingCard from "./PendingCard";
import NoPendingCard from "./NoPendingCard"; // Import your new component

function SwiperComponent() {
    const { store, actions } = useContext(Context)
    const [isLoading, setIsLoading] = useState(true); // Add this line
    let pendingSessionsElements = null


    useEffect(() => {
        if (store.userSessions) {
            setIsLoading(false); // Set isLoading to false once the fetch has completed
        }
    }, [store.userSessions]);

    if (store.userSessions && store.profile) {
        let pendingSessions = store.userSessions.filter(session => {
            return session.status == "Pending" && session.tutor_id == store.profile.id
        })

        pendingSessions.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);

            // Calculate the difference in milliseconds from now
            const differenceA = dateA - new Date();
            const differenceB = dateB - new Date();

            // If the dates are the same, sort based on time
            if (differenceA === differenceB) {
                const timeA = parseInt(a.time.replace(":", ""));
                const timeB = parseInt(b.time.replace(":", ""));
                return timeA - timeB;
            }

            // Otherwise, sort based on date
            return differenceA - differenceB;
        })

        if (pendingSessions) {
            pendingSessionsElements = pendingSessions.map(session => {
                return (
                    <SwiperSlide>
                        <PendingCard
                            key={session.id}
                            learner_name={session.learner_name}
                            skill_name={session.skill_name}
                            date={session.date}
                            time={session.time}
                            status={session.status}
                            id={session.id}
                        />
                    </SwiperSlide>
                )
            })
            console.log(pendingSessions)

        }
    }

    return (
        <Swiper
            style={{ maxWidth: "400px", height: "100%" }} // Set width and height to 100% to fill the grid cell
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[EffectCreative, Pagination]}
            effect={'creative'}
            grabCursor={true}
            creativeEffect={{
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }}
        >

            {isLoading ? (
                <SwiperSlide>
                    <span class="loader"></span>
                </SwiperSlide>
            ) : pendingSessionsElements && pendingSessionsElements.length > 0 ? (
                pendingSessionsElements
            ) : (
                <SwiperSlide>
                    <NoPendingCard /> {/* Render your new component when there are no pending sessions */}
                </SwiperSlide>
            )}
        </Swiper>
    )
}

export default SwiperComponent