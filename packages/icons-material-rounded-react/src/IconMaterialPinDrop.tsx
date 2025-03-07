import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinDrop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinDrop'

      short_name='PinDrop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-301q99-80 149.5-154T680-594q0-56-20.5-95.5t-50.5-64Q579-778 544-789t-64-11q-29 0-64 11t-65 35.5q-30 24.5-50.5 64T280-594q0 65 50.5 139T480-301Zm0 85q-10 0-19.5-3t-17.5-9q-81-63-162-158.5T200-594q0-71 25.5-124.5T291-808q40-36 90-54t99-18q49 0 99 18t90 54q40 36 65.5 89.5T760-594q0 112-81 207.5T517-228q-8 6-17.5 9t-19.5 3Zm0-304q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM240-80q-17 0-28.5-11.5T200-120q0-17 11.5-28.5T240-160h480q17 0 28.5 11.5T760-120q0 17-11.5 28.5T720-80H240Zm240-514Z"/>
    </Icon>
  );
});

IconMaterialPinDrop.displayName = 'OnesyIconMaterialPinDrop';

export default IconMaterialPinDrop;
