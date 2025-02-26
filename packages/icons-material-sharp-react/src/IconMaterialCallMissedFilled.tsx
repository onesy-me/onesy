import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallMissedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMissedFilled'

      short_name='CallMissed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-263 200-543v183h-80v-320h320v80H256l224 224 304-304 56 57-360 360Z"/>
    </Icon>
  );
});

IconMaterialCallMissedFilled.displayName = 'OnesyIconMaterialCallMissedFilled';

export default IconMaterialCallMissedFilled;
