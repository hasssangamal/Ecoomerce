import React from 'react';
import styles from './Home.module.css';
import Featureproduct from '../../featureproduct/featureproduct';
import Categoryslider from '../categoryslider/categoryslider'
import Mainslider from '../mainslider/mainslider';
export default function Home() {
  return <>
  < Mainslider/>
  <Categoryslider/>
    <Featureproduct/>
  </>
}
