import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowInsert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowInsert'

      short_name='ArrowInsert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-624v304q0 17-11.5 28.5T280-280q-17 0-28.5-11.5T240-320v-400q0-17 11.5-28.5T280-760h400q17 0 28.5 11.5T720-720q0 17-11.5 28.5T680-680H376l356 356q11 11 11 28t-11 28q-11 11-28 11t-28-11L320-624Z"/>
    </Icon>
  );
});

IconMaterialArrowInsert.displayName = 'OnesyIconMaterialArrowInsert';

export default IconMaterialArrowInsert;
