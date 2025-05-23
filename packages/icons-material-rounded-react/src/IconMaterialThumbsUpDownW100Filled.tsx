import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbsUpDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbsUpDownW100Filled'

      short_name='ThumbsUpDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M86-438q-26 0-43-17t-17-43v-234q0-6 2.5-11.5T36-754l139-139q5-5 10.5-7t10.5-2q14 0 23.5 10t6.5 26l-26 120h194q26 0 43 17t17 43v4q0 6-1 10.5t-3 9.5l-88 202q-5 10-13 16t-19 6H86Zm480 224q-26 0-43-17t-17-43v-4q0-6 1-10.5t3-9.5l88-202q5-10 13-16t19-6h244q26 0 43 17t17 43v234q0 6-2.5 11.5T924-206L785-67q-5 5-10.5 7T764-58q-14 0-23.5-10T734-94l26-120H566Z"/>
    </Icon>
  );
});

IconMaterialThumbsUpDownW100Filled.displayName = 'OnesyIconMaterialThumbsUpDownW100Filled';

export default IconMaterialThumbsUpDownW100Filled;
