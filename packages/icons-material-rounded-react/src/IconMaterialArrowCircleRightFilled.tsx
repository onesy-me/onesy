import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowCircleRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleRightFilled'

      short_name='ArrowCircleRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm8-360-36 36q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L508-612q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440h128Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleRightFilled.displayName = 'OnesyIconMaterialArrowCircleRightFilled';

export default IconMaterialArrowCircleRightFilled;
