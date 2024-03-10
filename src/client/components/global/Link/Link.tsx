import MaterialLink from '@mui/material/Link';
import { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
}

export const Link = ({ children, href }: LinkProps) => {
  return (
    <MaterialLink href={href} color='primary'>
      {children}
    </MaterialLink>
  );
};
