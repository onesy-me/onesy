import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoofingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoofingFilled'

      short_name='Roofing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-160v-240h240v240H360ZM88-440l-48-64 440-336 160 122v-82h120v174l160 122-48 64-392-299L88-440Z"/>
    </Icon>
  );
});

IconMaterialRoofingFilled.displayName = 'OnesyIconMaterialRoofingFilled';

export default IconMaterialRoofingFilled;
