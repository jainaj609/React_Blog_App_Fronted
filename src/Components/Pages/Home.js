import React, { useContext } from 'react'
import '../CSS/Home.css'
import { Store } from '../ContextAPI/ConTextAPI'
import { useNavigate } from 'react-router-dom';
import Header from './Header'
const Home = () => {

    const [dataContext] = useContext(Store);

    const navigate = useNavigate();
    const handleClick = (id, item, category) => {// two arg - 1. pathname - 2. state
        navigate(`/latest/${id}`, { state: { item, category } });
    };


    return (
        <div className={'Home'}>
            <Header />
            <div className={'TitleImages-Box'}>
                <img src={dataContext.natureImages.logo1} className={'Title-images Title-images-one'} alt="BigCo Inc. logo" width={'800px'} height={'600px'} />
                <div className={'TitleImagesSub-Box'}>
                    <img src={dataContext.natureImages.logo2} className={'Title-images Title-images-two'} alt="BigCo Inc. logo" width={'449px'} height={'295px'} />
                    <img src={dataContext.natureImages.logo3} className={'Title-images Title-images-three'} alt="BigCo Inc. logo" width={'449px'} height={'295px'} />
                </div>
            </div>

            <p className='Heading-Latest'>The Latest</p>

            <div className='The-Latest-Box'>
                {
                    dataContext.latest.map((item, index, category) => (
                        <div className='The-Latest-Child' key={index}>
                            <div>
                                <img className='The-Latest-Images' src={item.image.one} alt={item.image} onClick={() => handleClick(item.id, item, category)} height={'200px'} width={'400px'} />
                            </div>
                            <div className='Content'>
                                <h2>{item.heading} :</h2>
                                <h2>{item.contentLine}</h2>
                                <p className='item-news'>{item.news} / {item.date}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className='section'>

                <div className='Bollywood'>
                    <p className='Heading-Bollywood'>Latest Articles</p>

                    <div className='boxes'>
                        {dataContext.Technology.map((item, index, category) => (
                            <div className='box-container' key={index}>
                                <div className='box' onClick={() => handleClick(item.id, item, category)}>
                                    <div>
                                        <img  className='Images-Mobile' src={item.image.one} alt='item.heading' height={'184px'} width={'308px'} />
                                    </div>
                                    <div className='content'>
                                        <h3>{item.heading}</h3>
                                        <p className='contentLine'>{item.contentLine}</p>
                                        <p><span className='released_year'>Released :</span> {item.released}</p>
                                    </div>
                                </div>
                                <hr className='hrline' />
                            </div>
                        ))

                        }
                    </div>
                    <img style={{ marginTop: '222px', borderRadius: '0' }} src={dataContext.natureImages.logo3} className={'Title-images Title-images-two'} alt="BigCo Inc. logo" width={'750px'} height={'450px'} />

                </div>
                <div className='Box-in-Column'>
                    <p className='Heading-Top-Posts Heading-Bollywood'>Top Posts</p>

                    <div className='Advertisement-Box'>Advertisement</div>
                    <div className='Top-Posts'>

                        <div className='boxes1' >

                            {dataContext.Technology.map((item, index) => (
                                item.id === 1 ?
                                    <div key={index} className='box2'>
                                        <div className='first-content'>
                                            <div>
                                                <img className='TopPost_firstImage' src={item.image.one} alt='' height={'266px'} width={'452px'} />
                                            </div>
                                            <div className='inline-content'>
                                                <h3>{item.heading}</h3>
                                                <h1>1</h1>
                                            </div>
                                            <p className='grey'><span className='released_year'>Released :</span> {item.released}</p>
                                        </div>
                                        <hr className='hrline' />
                                    </div>
                                    : index < 4 ?
                                        <div className='box-container1' key={index}>
                                            <div className='box1'>
                                                <div>
                                                    <img className='Images-Mobile' src={item.image.one} alt='item.heading' height={'104px'} width={'150px'} />
                                                </div>
                                                <div className='content1'>
                                                    <div className='inline-content1'>
                                                        <h3>{item.heading}</h3>
                                                        <h1>{item.id}</h1>
                                                    </div>
                                                    <p className='grey'><span className='released_year'>Released:</span> {item.released}</p>
                                                </div>
                                            </div>
                                            <hr className='hrline' />
                                        </div> : null

                            ))
                            }
                        </div>

                    </div>

                </div>
            </div>
            <p className='Heading-Latest'>Latest Stories</p>

            <div className='The-Latest-Box'>
                {
                    dataContext.latest.map((item, index, category) => (
                        <div className='The-Latest-Child' key={index}>
                            <div>
                                <img className='The-Latest-Images' src={item.image.one} alt={item.image} onClick={() => handleClick(item.id, item, category)} height={'200px'} width={'400px'} />
                            </div>
                            <div className='Content'>
                                <h2>{item.heading} :</h2>
                                <h2>{item.contentLine}</h2>
                                <p className='item-news'>{item.news} / {item.date}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Home
