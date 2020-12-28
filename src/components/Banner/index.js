import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

import {
  BannerContainer,
  BannerContent,
  BannerItems,
  BannerH1,
  BannerP,
  BannerBtn,
} from './BannerElements';

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BannerContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <BannerContent>
        <BannerItems>
          <BannerH1>Greatest Burger Ever</BannerH1>
          <BannerP>Ready in 60 seconds</BannerP>
          <BannerBtn>Place Order</BannerBtn>
        </BannerItems>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
