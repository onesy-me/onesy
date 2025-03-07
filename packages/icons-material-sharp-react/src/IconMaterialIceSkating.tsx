import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIceSkating = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IceSkating'

      short_name='IceSkating'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-80h160v-80H120v-600h360v180q0 27 16.5 49t42.5 29l221 61v281H640v80h80q50 0 85-35t35-85h80q0 83-58.5 141.5T720-80H80Zm120-240h480v-139l-164-47q-36-11-63-35.5T412-600h-92v-40h84q-2-12-2.5-20t-1.5-20h-80v-40h80v-40H200v440Zm120 160h240v-80H320v80ZM200-320Z"/>
    </Icon>
  );
});

IconMaterialIceSkating.displayName = 'OnesyIconMaterialIceSkating';

export default IconMaterialIceSkating;
