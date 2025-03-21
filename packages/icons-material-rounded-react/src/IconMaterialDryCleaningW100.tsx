import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDryCleaningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DryCleaningW100'

      short_name='DryCleaning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M379-132q-25 0-42.5-17.5T319-192v-163h-82q-27 0-46-19.5T172-421q0-20 10.5-37t28.5-25l255-114v-57q-32-5-53-29.5T392-740q0-37 25.5-62.5T480-828q26 0 47.5 14.5T560-775q1 2 1 6 0 6-4.5 10.5T546-754q-5 0-8-2t-5-7q-7-17-21-27t-32-10q-25 0-42.5 17.5T420-740q0 25 17.5 42.5T480-680q6 0 10 4t4 10v69l254 114q18 8 29 25t11 37q0 27-19.5 46.5T722-355h-81v163q0 25-17.5 42.5T581-132H379ZM237-383h87q7-17 21.5-27t33.5-10h202q19 0 33.5 10t21.5 27h86q16 0 27-11t11-27q0-11-5.5-21T738-457L480-572 223-457q-11 5-17 15t-6 21q0 16 10.5 27t26.5 11Zm142 223h202q14 0 23-9t9-23v-168q0-14-9-23t-23-9H379q-14 0-23 9t-9 23v168q0 14 9 23t23 9Zm0-232h-32 266-234Z"/>
    </Icon>
  );
});

IconMaterialDryCleaningW100.displayName = 'OnesyIconMaterialDryCleaningW100';

export default IconMaterialDryCleaningW100;
