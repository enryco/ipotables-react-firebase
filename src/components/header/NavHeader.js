import React from 'react';
import { Route } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { HomeButton, BackButton } from './NavButtons';

const NavHeader = props => (<Route path='/' render={() => (
  <div style={{ background: '#F1f1f1',  }}>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      minHeight: 100,
      padding: 15,
      maxWidth: 768,
      margin: 'auto',
    }}>
      <div style={{
        flex: 1,
      }}>
        <Route path='/' component={HomeButton} />
        <Route path='/:nav' component={BackButton} />
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <img src={Logo} alt="ipo logo" style={{ height: 75, objectFit: 'contain' }} />
      </div>
      <div style={{ flex: 1, textAlign: 'right' }}>
        <h1>IPO Tables</h1>
      </div>
    </div>
  </div>)
} />)

export default NavHeader