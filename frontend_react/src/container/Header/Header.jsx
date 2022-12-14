import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
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
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [ -100, 0 ], opacity: [0, 1] }}
        transition={{ duration: 5 }}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className="badge-cmp app__flex">
            <span>π</span>
            <div style={{ marginLeft : 20 }}>
              <p className='p-text'>μλνμΈμ</p>
              <h1 className='head-text'> μ₯μ±μ€μ </h1>
              <h1 className='head-text'> ν¬ν ν΄λ¦¬μ€</h1>
              <p className='p-text'>μ μ€μ  κ²μ νμν©λλ€.</p>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className='p-text'>λΆμ²λνκ΅ μ¬νμ</p>            
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" className='profile' />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
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

export default AppWrap(Header, 'ν');