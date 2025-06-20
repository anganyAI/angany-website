import React, { useEffect, useState } from 'react';
import Navbar from '@theme-original/Navbar';
import type NavbarType from '@theme/Navbar';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof NavbarType>;

export default function NavbarWrapper(props: Props): React.JSX.Element | null {
  const [isDocsPage, setIsDocsPage] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsDocsPage(window.location.pathname.startsWith('/docs'));
  }, []);

  // Hide navbar on docs pages when using custom layout
  if (isClient && isDocsPage) {
    return null;
  }

  // Show original navbar for non-docs pages
  return <Navbar {...props} />;
} 