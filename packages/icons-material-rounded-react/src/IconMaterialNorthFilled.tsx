import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNorthFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthFilled'

      short_name='North'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-17 0-28.5-11.5T440-120v-607L284-572q-11 11-27.5 11.5T228-572q-11-11-11-28t11-28l224-224q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l224 224q11 11 11 27.5T732-572q-12 12-28.5 12T675-572L520-727v607q0 17-11.5 28.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialNorthFilled.displayName = 'OnesyIconMaterialNorthFilled';

export default IconMaterialNorthFilled;
