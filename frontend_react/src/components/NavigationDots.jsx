/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['홈', '대해서', '프로젝트', '스킬', '연락'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#FFAAAF' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;