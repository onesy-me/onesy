import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllInboxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInboxFilled'

      short_name='AllInbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-440q24 0 43.5-13t29.5-35q3-14 14-23t25-9h128v-280H320v280h128q14 0 25 8.5t14 22.5q5 24 26 36.5t47 12.5ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Z"/>
    </Icon>
  );
});

IconMaterialAllInboxFilled.displayName = 'OnesyIconMaterialAllInboxFilled';

export default IconMaterialAllInboxFilled;
