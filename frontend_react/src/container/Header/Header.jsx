import React from 'react';
import { motion } from 'framer-motion';


import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition:  {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [ -100, 0 ], opacity: [0, 1] }}
        transition={{ duration: 5 }}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft : 20 }}>
              <p className='p-text'>안녕하세요</p>
              <h1 className='head-text'> 장채윤의 </h1>
              <h1 className='head-text'> 포토폴리오</h1>
              <p className='p-text'>에 오신 것을 환영합니다.</p>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className='p-text'>프론트엔드 개발자</p>
            <p className='p-text'>부천대학교 대학생</p>            
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile"
          className="overlay circle"
        />
      </motion.div>
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.node, images.react, images.css].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Header;
