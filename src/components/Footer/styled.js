import styled from 'styled-components';

import { theme } from '@sitecore-search/ui';

import { Row } from '../Common';

export const FooterWrapper = styled.footer`
  //background-color: ${theme.vars.palette.primary.main};

  background-color: #1d294e;
  box-shadow: rgb(153 153 153) 0px -1px 3px 0px;
  z-index: 5000;
  position: relative;
`;

export const FooterContent = styled(Row)`
  width: 80%;
  margin: auto;
`;

export const FooterColumn = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  text-align: left;
`;

export const FooterColumnTitle = styled.h4`
color: #ffffff;
  font-size: 20px;
  margin-bottom: 30px;
  letter-spacing: 1px;
  //color: ${theme.vars.palette.primary.contrastText};
  font-weight: bold;
`;

export const FooterColumnList = styled.ul`
  padding-left: 0;
  list-style-type: none;
`;

export const FooterColumnItem = styled.li`
  padding-bottom: 20px;
`;

export const FooterColumnLink = styled.a`
  //color: ${theme.vars.palette.primary.contrastText};
  color: #ffffff;
  font-size: 16px;
`;
