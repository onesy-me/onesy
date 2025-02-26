import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAodTabletFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodTabletFilled'

      short_name='AodTablet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-160v-640h880v640H40Zm200-80h480v-480H240v480Zm80-260v-60h320v60H320Zm40 120v-60h240v60H360Z"/>
    </Icon>
  );
});

IconMaterialAodTabletFilled.displayName = 'OnesyIconMaterialAodTabletFilled';

export default IconMaterialAodTabletFilled;
