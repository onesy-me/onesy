import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatH6W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH6W100Filled'

      short_name='FormatH6'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M159.96-306q-5.96 0-9.96-4.02-4-4.03-4-9.98v-320q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v146h212v-146q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v320q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-146H174v146q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM554-306q-24.75 0-42.37-17.63Q494-341.25 494-366v-228q0-24.75 17.63-42.38Q529.25-654 554-654h194q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H554q-14 0-23 9t-9 23v100h180q24.75 0 42.38 17.62Q762-458.75 762-434v68q0 24.75-17.62 42.37Q726.75-306 702-306H554Zm-32-160v100q0 14 9 23t23 9h148q14 0 23-9t9-23v-68q0-14-9-23t-23-9H522Z"/>
    </Icon>
  );
});

IconMaterialFormatH6W100Filled.displayName = 'OnesyIconMaterialFormatH6W100Filled';

export default IconMaterialFormatH6W100Filled;
