import React from 'react';
import Typed from 'react-typed';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import loading from '../../../assets/img/loading.gif';
import { useApiContext } from '../../../context/Context';
import english from '../../../translations/en/global.json';
import spanish from '../../../translations/es/global.json';
import WorksModal from '../../WorksModal/WorksModal';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './WorksSection.scss';

const WorksSection = () => {

    // Get Language
    const { language } = useApiContext();

    // Get all projects data
    const { dataProject } = useApiContext();
    const { setSelectedProject } = useApiContext();

    // Navigation carousel config
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    // Modal
    const { setShowModal } = useApiContext();
    const handleShow = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    return (
        <section className="section my-works">
            <div className="titles-lucas col-12">
                <h2>{language === 'es' ? `${spanish.works.tag}` : `${english.works.tag}`}</h2>
            </div>

            <div>
                {(() => {
                    if (language === 'en') {
                        return (
                            <p className="work-title">Selected projects
                                <Typed
                                    strings={[" I've worked on in the past.", " I'm proud of."]}
                                    typeSpeed={45}
                                    backSpeed={65}
                                    startDelay={200}
                                    backDelay={1500}
                                    loop
                                />
                            </p>
                        )
                    }
                    else if (language === 'es') {
                        return (
                            <p className="work-title">Proyectos
                                <Typed
                                    strings={[" que he realizado en el pasado", " de los cuales estoy orgulloso"]}
                                    typeSpeed={45}
                                    backSpeed={65}
                                    startDelay={200}
                                    backDelay={1500}
                                    loop
                                />
                            </p>
                        )
                    }
                })()}
            </div>

            <div className="carousel-portfolio">
                <Swiper
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        1: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                    }}
                >

                    {dataProject.length > 0 ? dataProject.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div onClick={() => handleShow(project)} className={`portfolio-container ${project.fullname}`}>
                                <div className=" portfolio-container__logo"><img src={(`/assets/img/works/${project.picture}`)} alt={project.fullname} width='500px' height='335px' /></div>
                                <div className="view-project">
                                    <h4 onClick={() => handleShow(project)}>{language === 'es' ? `VER PROYECTO` : `VIEW PROJECT`}</h4>
                                </div>
                                <div className="portfolio-info">
                                    <h4>{project.fullname}</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                        className="bi bi-zoom-in" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                        <path
                                            d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
                                        <path fillRule="evenodd"
                                            d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                        :
                        <div className='center'><img width={'50px'} src={loading} alt="loading" /></div>
                    }

                </Swiper>
                <div className='arrow-back' ref={navigationPrevRef}>{`{`}</div>
                <div className='arrow-next' ref={navigationNextRef}>{`}`}</div>
            </div>

            {/* MODAL */}
            <WorksModal />

        </section>
    )

}

export default WorksSection;