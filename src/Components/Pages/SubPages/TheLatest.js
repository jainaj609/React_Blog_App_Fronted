import React, { useContext, useState } from 'react'

import '../../CSS/SubPages/TheLatest.css'
import SpecialHeader from './SpecialHeader';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Store } from '../../ContextAPI/ConTextAPI';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const TheLatest = () => {

    const locationObj = useLocation();
    // console.log(locationObj);

    const { id } = useParams();

    const item = locationObj.state.item;
    const category = locationObj.state.category;
    // console.log(category);

    const [dataContext] = useContext(Store);
    const navigate = useNavigate();

    const [claps, setClaps] = useState(9.3);

    const handleClick = (id, item, category) => {// two arg - 1. pathname - 2. state
        navigate(`/latest/${id}`, { state: { item, category } });
    };

    const WriteInfoBOX =
        <div className='Writer-Info-Box'>
            <div className='Writer-Info'>
                <div>
                    <img src={dataContext.react.MenImage} alt={'MenImage'} />
                </div>
                <div>
                    <p className='Writer-Name'>Dmitry Nozhenko</p>
                    <p className='Date-of-Public'>April 14, 2023 . 10 min read</p>
                </div>
            </div>
            <div className='icons'>
                <FaFacebook className='Insta' />
                <FaTwitter className='Insta' />
                <FaInstagram className='Insta' />
                <FaYoutube className='Insta' />
            </div>
        </div>

    const WriteInfoBOX1 = ({className}) => (
    <div className={`Writer-Info-Box ${className}`}>
        <div className='Writer-Info'>
            <div>
                <img src={dataContext.react.MenImage} alt={'MenImage'} />
            </div>
            <div>
                <p className='Writer-Name'>Dmitry Nozhenko</p>
                <p className='Date-of-Public'>April 14, 2023 . 10 min read</p>
            </div>
        </div>
    </div>)

    return (
        <>
            <SpecialHeader text={"Get Started"}/>
            <div className='position'>
                <div className='claps'>
                    <img src={dataContext.react.ReactRythmImage} onClick={() => setClaps(claps + 1)} alt='clapImage' />
                    <p className='clap-Count'>{claps}K claps</p>
                </div>
                <div className=' claps Share-icon'>
                    <img src={dataContext.react.shareImage} alt='shareImage' />
                    <span className='clap-Count'>&nbsp;&nbsp; Share this article</span>
                </div>
            </div>
            <header>
                <h1>{item.heading}</h1>
                <h1>{item.contentLine}</h1>
            </header>
            <div className='LatestComponent'>
                <div className='The-Latest-Container'>
                    {WriteInfoBOX}
                    <section>
                        <div>
                            <img className='Mobile-Images' src={item.image.one} alt={item.heading} height={'273px'} width={'464px'} />
                        </div>
                        <p>
                            {item.content.para1}
                        </p>
                        <div>
                            <img className='Mobile-Images' src={item.image.two} alt={item.heading} height={'273px'} width={'464px'} />
                        </div>
                        <p>
                            {item.content.para2}
                        </p>
                    </section>
                    <div className='claps'>
                        <img src={dataContext.react.ReactRythmImage} onClick={() => setClaps(claps + 1)} alt='clapImage' />
                        <p className='clap-Count'>{claps}K claps</p>
                    </div>
                    <hr className='hrline' />
                    <WriteInfoBOX1/>
                    <hr className='hrline' />
                </div>

                <div className='The-Latest-Boxx'>
                    <div>
                        <p className='More-from-the-siren'>More From The Siren</p>
                        <hr className='hrline hrline-one' />
                    </div>
                    <div className='The-Latest-Boxes'>

                        {
                            category.map((item, index, category) => (
                                Number(id) !== item.id ?
                                    <div className='The-Latest-Child1' key={index}>
                                        <div>
                                            <img className='The-Latest-Images Mobile-Images' src={item.image.one} alt={item.image} onClick={() => handleClick(item.id, item, category)} height={'200px'} width={'371px'} />
                                        </div>
                                        <div className='Content Content1'>
                                            <h2>{item.heading}</h2>
                                            <h2 className='contentLine'>{item.contentLine}</h2>
                                            <WriteInfoBOX1 className={'Writer-Info-Box1'}/>
                                        </div>
                                    </div>
                                    : null
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default TheLatest
