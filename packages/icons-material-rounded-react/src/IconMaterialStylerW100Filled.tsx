import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStylerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylerW100Filled'

      short_name='Styler'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M237-383h82v-7q0-12.75 8.63-21.38Q336.25-420 349-420h262q12.75 0 21.38 8.62Q641-402.75 641-390v7h81q16 0 27-11t11-27q0-11-5.5-21T738-457L480-572 223-457q-11 5-17 15t-6 21q0 16 10.41 27 10.4 11 26.59 11Zm112 251q-12.75 0-21.37-8.63Q319-149.25 319-162v-193h-82q-27.08 0-46.04-19.26Q172-393.53 172-421.05 172-441 182.5-458q10.5-17 28.5-25l255-114v-57q-32-5-53-29.5T392-740q0-36.67 25.67-62.33Q443.33-828 480-828q27.42 0 48.71 15T560-774q2 6 0 12t-8 8q-6 2-11.5 0t-7.5-8q-7.22-16.72-20.94-27.36Q498.33-800 479.56-800q-24.56 0-42.06 17.25Q420-765.5 420-740t17.25 42.75Q454.5-680 480-680q5.95 0 9.98 4.03Q494-671.95 494-666v69l254 114q17.93 8.22 28.97 24.99Q788-441.24 788-421.38q0 27.38-19.25 46.88Q749.5-355 722-355h-81v193q0 12.75-8.62 21.37Q623.75-132 611-132H349Z"/>
    </Icon>
  );
});

IconMaterialStylerW100Filled.displayName = 'OnesyIconMaterialStylerW100Filled';

export default IconMaterialStylerW100Filled;
