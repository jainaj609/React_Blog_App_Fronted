import React, { useMemo, useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import '../CSS/Bollywood.css'
import Header from './Header';

import { Store } from '../ContextAPI/ConTextAPI';

const Bollywood = () => {

  const [, , token,] = useContext(Store);
  console.log(token);
  const navigate = useNavigate();
  const { pageName } = useParams();


  const [pagedata, setPagedata] = useState([]);
  const [pageNamedata, setPageNamedata] = useState(pageName);

  const name = useMemo(() => {
    if (pageName === pageNamedata) {
      return pageName;
    }
    else {
      setPageNamedata(pageName)
      return pageNamedata;
    }
  })
  const getdata = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/app/category/${name}`,{headers: {'Authorization':`Bearer ${token}`}})
      .then(res => {
        setPagedata(res.data[name])
        if (res.data.msg === 'Unauthorised Person') {
          alert(JSON.stringify(res.data))
          navigate('/')
        }
      })

  }

  const verify = () => {
    const string = ["Bollywood", "Technology", "Hollywood", "Fitness", "Food"];
    if (string.includes(pageName)) {

    }
    else {
      navigate('*')
    }
  }

  useEffect(() => {
    verify();
    getdata();
  }, [pageNamedata])

  const handleNavigation = (id, item, category) => {// two arg - 1. pathname - 2. state
    navigate(`/${pageName}/${id}`, { state: { item, category } });
  };
  return (
    <div>
      <Header />
      <div className='section'>

        <div className='Bollywood'>
          <p className='Heading-Bollywood'>{pageName}</p>
          <div className='boxes'>
            {pagedata.map((item, index, category) => (
              <div className='box-container' key={index}>
                <div className='box' onClick={() => handleNavigation(item.id, item, category)}>
                  <div>
                    <img className='Images-Mobile' src={item.image.one} alt='item.heading' height={'184px'} width={'308px'} />
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

        </div>
        <div className='Box-in-Column'>
          <div className='Top-Posts'>
            <p className='Heading-Top-Posts Heading-Bollywood'>Top Posts</p>

            <div className='boxes1' >

              {pagedata.map((item, index) => (
                item.id === 1 ?
                  <div key={index}>
                    <div className='first-content'>
                      <div>
                        <img className='TopPost_firstImage' src={pagedata[0].image.one} alt='' height={'266px'} width={'452px'} />
                      </div>
                      <div className='inline-content'>
                        <h3>{pagedata[0].heading}</h3>
                        <h1>1</h1>
                      </div>
                      <p className='grey'><span className='released_year'>Released :</span> {pagedata[0].released}</p>
                    </div>
                    <hr className='hrline' />
                  </div>
                  : index < 4 ?
                    <div className='box-container1' key={index}>
                      <div className='box1'>
                        <div>
                          <img className='Images-Mobile' src={item.image.one} alt='item.heading' height={'104px'} width={'150px'} />
                        </div>
                        <div className='content1 content1-style'>
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
          <div className='Advertisement-Box'>Advertisement</div>
        </div>
      </div>

    </div>
  )
}

export default Bollywood
