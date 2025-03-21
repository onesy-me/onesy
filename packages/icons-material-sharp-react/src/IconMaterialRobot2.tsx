import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRobot2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Robot2'

      short_name='Robot2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-280h640v280H160Zm200-320q-83 0-141.5-58.5T160-640q0-83 58.5-141.5T360-840h240q83 0 141.5 58.5T800-640q0 83-58.5 141.5T600-440H360ZM240-200h480v-120H240v120Zm120-320h240q50 0 85-35t35-85q0-50-35-85t-85-35H360q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-80q17 0 28.5-11.5T400-640q0-17-11.5-28.5T360-680q-17 0-28.5 11.5T320-640q0 17 11.5 28.5T360-600Zm240 0q17 0 28.5-11.5T640-640q0-17-11.5-28.5T600-680q-17 0-28.5 11.5T560-640q0 17 11.5 28.5T600-600ZM480-200Zm0-440Z"/>
    </Icon>
  );
});

IconMaterialRobot2.displayName = 'OnesyIconMaterialRobot2';

export default IconMaterialRobot2;
