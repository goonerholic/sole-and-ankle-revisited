import { BREAKPOINTS } from './constants';

const defaultTheme = {
  queries: {
    belowMobile: `${BREAKPOINTS.mobileMax / 16}rem`,
    belowTablet: `${BREAKPOINTS.tabletMax / 16}rem`,
    belowLaptop: `${BREAKPOINTS.laptopMax / 16}rem`,
  },
};

export { defaultTheme };
