import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLiveHelpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveHelpFilled'

      short_name='LiveHelp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-40 360-160H120v-720h720v720H600L480-40Zm-4-240q21 0 35.5-14.5T526-330q0-21-14.5-35.5T476-380q-21 0-35.5 14.5T426-330q0 21 14.5 35.5T476-280Zm-36-154h74q0-17 1.5-29t6.5-23q5-11 12.5-20.5T556-530q35-35 49.5-58.5T620-642q0-53-36-85.5T487-760q-55 0-93.5 27T340-658l66 26q7-27 28-43.5t49-16.5q27 0 45 14.5t18 38.5q0 17-11 36t-37 42q-17 14-27.5 27.5T453-505q-7 15-10 31.5t-3 39.5Z"/>
    </Icon>
  );
});

IconMaterialLiveHelpFilled.displayName = 'OnesyIconMaterialLiveHelpFilled';

export default IconMaterialLiveHelpFilled;
