import React from 'react';
import { Box, Flex, ThemeUIStyleObject } from 'theme-ui';

import { fadeIn } from 'lib/keyframes';
import Footer from '../Footer';

type Props = {
  shortenFooter?: boolean;
  fade?: boolean;
  sx?: ThemeUIStyleObject;
};

const PrimaryLayout = ({
  children,
  shortenFooter = false,
  fade = true,
  ...props
}: React.PropsWithChildren<Props>): React.ReactElement => {
  return (
    <React.Fragment>
      <Flex
        sx={{
          mx: 'auto',
          width: '100%',
          flexDirection: 'column',
          minHeight: '100vh',
          animation: fade ? `${fadeIn} 350ms ease` : undefined
        }}
        {...props}
      >
        <Box as="main" sx={{ width: '100%', flex: '1 1 auto', variant: 'layout.main' }}>
          {children}
        </Box>
      </Flex>
      <Footer shorten={shortenFooter} />
    </React.Fragment>
  );
};

export default PrimaryLayout;
