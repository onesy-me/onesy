import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmartToyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartToyFilled'

      short_name='SmartToy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-360q-50 0-85-35t-35-85q0-50 35-85t85-35v-160h200q0-50 35-85t85-35q50 0 85 35t35 85h200v160q50 0 85 35t35 85q0 50-35 85t-85 35v240H160v-240Zm200-80q25 0 42.5-17.5T420-500q0-25-17.5-42.5T360-560q-25 0-42.5 17.5T300-500q0 25 17.5 42.5T360-440Zm240 0q25 0 42.5-17.5T660-500q0-25-17.5-42.5T600-560q-25 0-42.5 17.5T540-500q0 25 17.5 42.5T600-440ZM320-280h320v-80H320v80Z"/>
    </Icon>
  );
});

IconMaterialSmartToyFilled.displayName = 'OnesyIconMaterialSmartToyFilled';

export default IconMaterialSmartToyFilled;
