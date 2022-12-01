import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';

import './About.scss';

const abouts = [
  { title: '웹 개발자', descpition: '저는 실력이 좋은 웹 개발자가 되고 싶습니다.', imgUrl: images.about01 },
  { title: '프론트엔드 개발자', descpition: '저는 끊임없이 노력하는 프론트엔드 개발자가 되고 싶습니다.', imgUrl: images.about02 },
  { title: 'UI/UX', descpition: '저는 사용자가 사용하기 편리한 UI/UX로 웹페이지를 개발하고 싶습니다.', imgUrl: images.about03 },
];

const About = () => {



  return (
    <>
      <h2 className='head-text'> 저는 밧줄처럼
        <span> 끈기 있는</span>
        <br />
        <span>프론트엔드 개발자</span>가 되고 싶습니다.
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ margin: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ margin: 10 }}>{about.descpition}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default About;
