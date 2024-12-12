import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUngroupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UngroupFilled'

      short_name='Ungroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m348-292-56-56 172-172H320v-80h280v280h-80v-144L348-292Zm412-188v-280H480v-80h360v360h-80ZM120-120v-720h80v640h640v80H120Z"/>
    </Icon>
  );
});

IconMaterialUngroupFilled.displayName = 'OnesyIconMaterialUngroupFilled';

export default IconMaterialUngroupFilled;
