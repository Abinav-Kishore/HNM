import React from 'react';
import { DesktopHomePage } from '../components/home/DesktopHomePage';
import { TabletHomePage } from '../components/home/TabletHomePage';
import { MobileHomePage } from '../components/home/MobileHomePage';

export const HomePage: React.FC = () => {
  return (
    <>
      <DesktopHomePage />
      <TabletHomePage />
      <MobileHomePage />
    </>
  );
};
