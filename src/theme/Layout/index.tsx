import React, { useEffect, useState } from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import type {WrapperProps} from '@docusaurus/types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

type Props = WrapperProps<typeof LayoutType>;

function BackgroundEffects() {
  return (
    <>
      {/* Hero Background Vector */}
      <div style={{
        position: 'absolute',
        left: '-433px',
        top: '159px',
        width: '1693.33px',
        height: '1590.89px',
        backgroundImage: 'url("/img/landing/hero-background-vector.svg")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: 1,
        pointerEvents: 'none'
      }}></div>

      {/* Background Gradients */}
      <div style={{
        width: '164.44px',
        height: '844.51px',
        left: '82.86px',
        top: '-19.64px',
        position: 'absolute',
        transform: 'rotate(-46deg)',
        transformOrigin: 'top left',
        background: 'linear-gradient(180deg, rgba(43.17, 187.92, 255, 0.24) 0%, rgba(43, 188, 255, 0) 100%)',
        boxShadow: '87.19558715820312px 87.19558715820312px 87.19558715820312px',
        filter: 'blur(43.60px)',
        pointerEvents: 'none'
      }}></div>

      <div style={{
        width: '54.71px',
        height: '918.33px',
        left: '-14.94px',
        top: '22.67px',
        position: 'absolute',
        transform: 'rotate(-46deg)',
        transformOrigin: 'top left',
        background: 'linear-gradient(180deg, rgba(43, 188, 255, 0.28) 0%, rgba(43, 188, 255, 0) 100%)',
        boxShadow: '60px 60px 60px',
        filter: 'blur(30px)',
        pointerEvents: 'none'
      }}></div>

      <div style={{
        width: '159.78px',
        height: '918.33px',
        left: '-156.31px',
        top: '184.86px',
        position: 'absolute',
        transform: 'rotate(-46deg)',
        transformOrigin: 'top left',
        background: 'linear-gradient(180deg, rgba(43.17, 187.92, 255, 0.24) 0%, rgba(43, 188, 255, 0) 100%)',
        boxShadow: '87.19558715820312px 87.19558715820312px 87.19558715820312px',
        filter: 'blur(43.60px)',
        pointerEvents: 'none'
      }}></div>
    </>
  );
}

export default function LayoutWrapper(props: Props): React.JSX.Element {
  const [isDocsPage, setIsDocsPage] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsDocsPage(window.location.pathname.startsWith('/docs'));
    
    // Additional effect to hide navbar on docs pages
    if (window.location.pathname.startsWith('/docs')) {
      const hideNavbar = () => {
        const navbars = document.querySelectorAll('.navbar, .navbar__inner, .navbar__items');
        navbars.forEach(navbar => {
          if (navbar instanceof HTMLElement) {
            navbar.style.display = 'none';
          }
        });
      };
      
      // Hide immediately
      hideNavbar();
      
      // Hide after a short delay in case elements are still loading
      setTimeout(hideNavbar, 100);
      setTimeout(hideNavbar, 500);
    }
  }, []);

  // During SSR or before client hydration, use original layout
  if (!isClient || !isDocsPage) {
    return <Layout {...props} />;
  }

  // Client-side rendering for docs pages with custom layout
  return (
    <>
      <Header />
      <div style={{ 
        position: 'relative',
        minHeight: 'calc(100vh - 596.40px)',
        background: '#0D0E11',
        paddingTop: '101.40px'
      }}>
        <BackgroundEffects />
        <Layout 
          {...props} 
          noFooter={true}
        />
      </div>
      <Footer />
    </>
  );
} 