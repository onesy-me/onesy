import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCakeAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeAddFilled'

      short_name='CakeAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-280h720v280H80Zm80-360v-200h240v-58q-18-12-29-29t-11-41q0-15 6-29.5t18-26.5l56-56 56 56q12 12 18 26.5t6 29.5q0 24-11 41t-29 29v58h240v200H160Zm600-200v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialCakeAddFilled.displayName = 'OnesyIconMaterialCakeAddFilled';

export default IconMaterialCakeAddFilled;
