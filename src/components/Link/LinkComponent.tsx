import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

interface ReusableLinkProps extends RouterLinkProps {
  children: React.ReactNode;
}

const LinkComponent: React.FC<ReusableLinkProps> = ({ children, ...rest }) => {
  return <RouterLink {...rest}>{children}</RouterLink>;
};

export default LinkComponent;
