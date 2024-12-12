import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWarningOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarningOffW100'

      short_name='WarningOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-260q-8.5 0-14.25-5.75T460-280q0-8.5 5.75-14.25T480-300q8.5 0 14.25 5.75T500-280q0 8.5-5.75 14.25T480-260Zm-14-80v-154l28 28v126h-28Zm266-1-76-76-175.79-303L433-640l-20-20 67-116 252 435ZM178-200h542L377-543 178-200Zm631 89-61-61H130l227-391-247-247 20-20 699 699-20 20ZM549-371Zm-4-157Z"/>
    </Icon>
  );
});

IconMaterialWarningOffW100.displayName = 'OnesyIconMaterialWarningOffW100';

export default IconMaterialWarningOffW100;
