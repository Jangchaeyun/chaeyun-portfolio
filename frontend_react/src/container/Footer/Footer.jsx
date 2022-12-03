import React, { useState, useEffect } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <>
      <h2 className="head-text">궁금하신 점 & 취업 관련 문의는 연락주세요!</h2>

      <div className='app__footer-cards'>
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a 
            href="mailto:zzangsally@gmail.com" 
            className="p-text"
          >
            zzangsally@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a 
            href="tel: 010-6603-1148" 
            className="p-text"
          >
            010-6603-1148
          </a>
        </div>
      </div>

      {!isFormSubmitted ?

      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type="text" placeholder="성명" name="name" value={name} onChange={handleChangeInput} />
        </div>
        <div className='app__flex'>
          <input className='p-text' type="email" placeholder="이메일" name="email" value={email} onChange={handleChangeInput} />
        </div>
        <div className='app__flex'>
        <textarea
          className="p-text"
          placeholder="메시지 입력"
          value={message}
          name="message"
          onChange={handleChangeInput}
        />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>{loading ? '보내는 중 ' : '메시지 보내기'}</button>
      </div>
      : <div>
        <h3 className="head-text">포토폴리오를 봐주시고, 문의주셔서 감사합니다.</h3>
      </div>}
    </>
  );
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  '연락',
  'app__primarybg'
);
