import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWomanFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WomanFilled'

      short_name='Woman'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-120v-200h-61q-21 0-33-17.5t-4-37.5l100-253q10-24 31-38t47-14q26 0 47 14t31 38l100 253q8 20-4 37.5T621-320h-61v200q0 17-11.5 28.5T520-80h-80q-17 0-28.5-11.5T400-120Zm80-600q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z"/>
    </Icon>
  );
});

IconMaterialWomanFilled.displayName = 'OnesyIconMaterialWomanFilled';

export default IconMaterialWomanFilled;
