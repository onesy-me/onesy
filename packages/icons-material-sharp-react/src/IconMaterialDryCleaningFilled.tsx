import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDryCleaningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DryCleaningFilled'

      short_name='DryCleaning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-240H120v-160l320-142v-26q-36-13-58-43.5T360-760q0-50 35-85t85-35q50 0 85 35t35 85h-80q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720h40v98l320 142v160H680v240H280Zm-80-320h80v-40h400v40h80v-28L480-552 200-428v28Z"/>
    </Icon>
  );
});

IconMaterialDryCleaningFilled.displayName = 'OnesyIconMaterialDryCleaningFilled';

export default IconMaterialDryCleaningFilled;
