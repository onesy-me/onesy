import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowCircleUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleUpFilled'

      short_name='ArrowCircleUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-488v128q0 17 11.5 28.5T480-320q17 0 28.5-11.5T520-360v-128l36 36q11 11 28 11t28-11q11-11 11-28t-11-28L508-612q-12-12-28-12t-28 12L348-508q-11 11-11 28t11 28q11 11 28 11t28-11l36-36Zm40 408q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleUpFilled.displayName = 'OnesyIconMaterialArrowCircleUpFilled';

export default IconMaterialArrowCircleUpFilled;
