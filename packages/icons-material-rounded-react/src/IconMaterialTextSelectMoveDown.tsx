import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextSelectMoveDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveDown'

      short_name='TextSelectMoveDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-760q-17 0-28.5-11.5T120-800q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760H160Zm292 452L348-412q-11-11-11.5-27.5T348-468q11-11 28-11t28 11l36 35v-207q0-17 11.5-28.5T480-680q17 0 28.5 11.5T520-640v207l36-36q11-11 27.5-11t28.5 12q11 11 11 28t-11 28L508-308q-12 12-28 12t-28-12ZM160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h640q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H160Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveDown.displayName = 'OnesyIconMaterialTextSelectMoveDown';

export default IconMaterialTextSelectMoveDown;
