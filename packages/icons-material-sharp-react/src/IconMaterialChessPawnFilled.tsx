import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChessPawnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChessPawnFilled'

      short_name='ChessPawn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-200q88-60 129-125t56-115H240v-80h90q-14-22-22-47t-8-53q0-75 52.5-127.5T480-880q75 0 127.5 52.5T660-700q0 28-8 53t-22 47h90v80H615q15 50 56 115t129 125v200H160Z"/>
    </Icon>
  );
});

IconMaterialChessPawnFilled.displayName = 'OnesyIconMaterialChessPawnFilled';

export default IconMaterialChessPawnFilled;
