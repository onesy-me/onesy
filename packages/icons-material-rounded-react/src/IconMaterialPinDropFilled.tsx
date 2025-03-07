import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinDropFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinDropFilled'

      short_name='PinDrop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-216q-10 0-19.5-3t-17.5-9q-81-63-162-158.5T200-594q0-71 25.5-124.5T291-808q40-36 90-54t99-18q49 0 99 18t90 54q40 36 65.5 89.5T760-594q0 112-81 207.5T517-228q-8 6-17.5 9t-19.5 3Zm0-304q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM240-80q-17 0-28.5-11.5T200-120q0-17 11.5-28.5T240-160h480q17 0 28.5 11.5T760-120q0 17-11.5 28.5T720-80H240Z"/>
    </Icon>
  );
});

IconMaterialPinDropFilled.displayName = 'OnesyIconMaterialPinDropFilled';

export default IconMaterialPinDropFilled;
