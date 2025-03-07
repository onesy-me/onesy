import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatH6W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH6W100'

      short_name='FormatH6'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M185.96-306q-5.96 0-9.96-4.02-4-4.03-4-9.98v-320q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v146h212v-146q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v320q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-146H200v146q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM580-306q-24.75 0-42.37-17.63Q520-341.25 520-366v-228q0-24.75 17.63-42.38Q555.25-654 580-654h194q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H580q-14 0-23 9t-9 23v100h180q24.75 0 42.38 17.62Q788-458.75 788-434v68q0 24.75-17.62 42.37Q752.75-306 728-306H580Zm-32-160v100q0 14 9 23t23 9h148q14 0 23-9t9-23v-68q0-14-9-23t-23-9H548Z"/>
    </Icon>
  );
});

IconMaterialFormatH6W100.displayName = 'OnesyIconMaterialFormatH6W100';

export default IconMaterialFormatH6W100;
