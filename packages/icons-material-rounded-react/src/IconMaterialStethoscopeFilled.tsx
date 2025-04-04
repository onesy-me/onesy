import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStethoscopeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StethoscopeFilled'

      short_name='Stethoscope'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M540-80q-108 0-184-76t-76-184v-23q-86-14-143-80.5T80-600v-200q0-17 11.5-28.5T120-840h80q0-17 11.5-28.5T240-880q17 0 28.5 11.5T280-840v80q0 17-11.5 28.5T240-720q-17 0-28.5-11.5T200-760h-40v160q0 66 47 113t113 47q66 0 113-47t47-113v-160h-40q0 17-11.5 28.5T400-720q-17 0-28.5-11.5T360-760v-80q0-17 11.5-28.5T400-880q17 0 28.5 11.5T440-840h80q17 0 28.5 11.5T560-800v200q0 90-57 156.5T360-363v23q0 75 52.5 127.5T540-160q75 0 127.5-52.5T720-340v-67q-35-13-57.5-43.5T640-520q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 69.5T800-407v67q0 108-76 184T540-80Z"/>
    </Icon>
  );
});

IconMaterialStethoscopeFilled.displayName = 'OnesyIconMaterialStethoscopeFilled';

export default IconMaterialStethoscopeFilled;
