import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAzmFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AzmFilled'

      short_name='Azm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m640-280 160-160v-360H440L280-640h360v360ZM400-40l160-160v-360H200L40-400h360v360Z"/>
    </Icon>
  );
});

IconMaterialAzmFilled.displayName = 'OnesyIconMaterialAzmFilled';

export default IconMaterialAzmFilled;
