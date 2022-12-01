import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';

const abouts = [
  { title: '웹 개발자', descpition: '저는 좋은 웹개발자가 되고 싶습니다.', imgUrl: '' },
  { title: '프론트엔드 개발자', descpition: '저는 좋은 프론트엔드 개발자가 되고 싶습니다.', imgUrl: '' }
];

const About = () => {
  return (
    <>
      <h2 className='head-text'>저는 
        <span> 프론트엔드 개발자</span>가 되고 싶습니다.
        <br />
        <span>REACT</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, type: 'tween' }}
          >

          </motion.div>
        ))}
      </div>
    </>
  );
}

export default About;
