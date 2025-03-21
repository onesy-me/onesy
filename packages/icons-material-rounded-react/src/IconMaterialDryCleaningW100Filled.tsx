import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDryCleaningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DryCleaningW100Filled'

      short_name='DryCleaning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M379-132q-24.75 0-42.37-17.63Q319-167.25 319-192v-163h-82q-27.08 0-46.04-19.26Q172-393.53 172-421.05 172-441 182.5-458q10.5-17 28.5-25l255-114v-57q-32-5-53-29.5T392-740q0-36.67 25.58-62.33Q443.15-828 479.69-828q26.31 0 47.81 14.5Q549-799 560-775q1 2 1 6 0 6.37-4.34 10.69-4.34 4.31-10.75 4.31-4.91 0-7.91-2t-5-7q-7-16.96-21-26.98T480-800q-25.5 0-42.75 17.25T420-740q0 25.5 17.25 42.75T480-680q5.95 0 9.98 4.03Q494-671.95 494-666v69l254 114q17.93 8.22 28.97 24.99Q788-441.24 788-421.38q0 27.38-19.25 46.88Q749.5-355 722-355h-81v163q0 24.75-17.62 42.37Q605.75-132 581-132H379ZM237-383h87q7-17 21.5-27t33.09-10h202.82q18.59 0 33.09 10 14.5 10 21.5 27h86q16 0 27-11t11-27q0-11-5.5-21T738-457L480-572 223-457q-11 5-17 15t-6 21q0 16 10.41 27 10.4 11 26.59 11Z"/>
    </Icon>
  );
});

IconMaterialDryCleaningW100Filled.displayName = 'OnesyIconMaterialDryCleaningW100Filled';

export default IconMaterialDryCleaningW100Filled;
