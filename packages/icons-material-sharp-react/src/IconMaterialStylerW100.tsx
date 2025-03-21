import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStylerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylerW100'

      short_name='Styler'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M319-132v-223h-82q-27.08 0-46.04-19.26Q172-393.53 172-421.05 172-441 182.5-458q10.5-17 28.5-25l255-114v-57q-32-5-53-29.5T392-740q0-36.67 25.53-62.33 25.53-25.67 62-25.67t61.97 26q25.5 26 25.5 62h-30q0-25.5-16.39-42.75Q504.23-800 480-800q-25.5 0-42.75 17.25T420-740q0 25.5 17.25 42.75T480-680q5.95 0 9.98 4.03Q494-671.95 494-666v69l254 114q17.93 8.22 28.97 24.99Q788-441.24 788-421.38q0 27.38-19.25 46.88Q749.5-355 722-355h-81v223H319Zm-82-251h82v-37h322v37h81q16 0 27-11t11-27q0-11-5.5-21T738-457L480-572 223-457q-11 5-17 15t-6 21q0 16 10.41 27 10.4 11 26.59 11Zm110 223h266v-232H347v232Zm0-232h266-266Z"/>
    </Icon>
  );
});

IconMaterialStylerW100.displayName = 'OnesyIconMaterialStylerW100';

export default IconMaterialStylerW100;
