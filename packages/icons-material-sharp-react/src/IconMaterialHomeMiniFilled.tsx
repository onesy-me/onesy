import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeMiniFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMiniFilled'

      short_name='HomeMini'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-760q76 0 148 18.5t128 54q56 35.5 90 87.5t34 120H80q0-68 34-120t90-87.5q56-35.5 128-54T480-760ZM360-200q-94 0-167.5-55.5T92-400h776q-27 89-100.5 144.5T600-200H360Z"/>
    </Icon>
  );
});

IconMaterialHomeMiniFilled.displayName = 'OnesyIconMaterialHomeMiniFilled';

export default IconMaterialHomeMiniFilled;
