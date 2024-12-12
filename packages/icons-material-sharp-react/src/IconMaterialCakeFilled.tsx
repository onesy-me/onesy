import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCakeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeFilled'

      short_name='Cake'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-280h720v280H120Zm80-360v-200h240v-58q-18-12-29-29t-11-41q0-15 6-29.5t18-26.5l56-56 56 56q12 12 18 26.5t6 29.5q0 24-11 41t-29 29v58h240v200H200Z"/>
    </Icon>
  );
});

IconMaterialCakeFilled.displayName = 'OnesyIconMaterialCakeFilled';

export default IconMaterialCakeFilled;
