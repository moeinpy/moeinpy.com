// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Contacts from '../Contacts';
import Copyright from '../Copyright';
import styles from './Footer.module.scss';
import { useSiteMetadata } from '../../hooks';

type Props = {
};

const Footer = ({}: Props) => {
  const { author, copyright } = useSiteMetadata();
  
  return (
    <div className={styles['footer'] + ' hidden-sm hidden-md hidden-lg'}>
      <Contacts contacts={author.contacts} />
      <Copyright copyright={copyright} />
    </div>
  );
};

export default Footer;
