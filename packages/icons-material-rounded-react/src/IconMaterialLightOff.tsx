import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLightOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightOff'

      short_name='LightOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm0-720q-44 0-81.5 15.5T332-742l-58-56q41-38 93.5-60T480-880q125 0 212.5 87.5T780-580q0 71-25 121.5T698-376l-56-56q21-23 39.5-59t18.5-89q0-92-64-156t-156-64Zm46 480H330q-69-41-109.5-110T180-580q0-20 2.5-39t7.5-37L84-764q-11-11-11.5-27.5T84-820q11-11 28-11t28 11l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84L526-320Zm-172-80h92L260-586v6q0 54 24.5 101t69.5 79Zm-6-98Zm134-94ZM360-200q-17 0-28.5-11.5T320-240q0-17 11.5-28.5T360-280h246q17 0 28.5 11.5T646-240q0 17-11.5 28.5T606-200H360Z"/>
    </Icon>
  );
});

IconMaterialLightOff.displayName = 'OnesyIconMaterialLightOff';

export default IconMaterialLightOff;
