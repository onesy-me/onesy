import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenInNewDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewDownFilled'

      short_name='OpenInNewDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v240q0 17-11.5 28.5T800-480q-17 0-28.5-11.5T760-520v-240H200v560h240q17 0 28.5 11.5T480-160q0 17-11.5 28.5T440-120H200Zm504-80L360-544q-11-11-11.5-27.5T360-600q11-11 28-11t28 11l344 343v-103q0-17 11.5-28.5T800-400q17 0 28.5 11.5T840-360v200q0 17-11.5 28.5T800-120H600q-17 0-28.5-11.5T560-160q0-17 11.5-28.5T600-200h104Z"/>
    </Icon>
  );
});

IconMaterialOpenInNewDownFilled.displayName = 'OnesyIconMaterialOpenInNewDownFilled';

export default IconMaterialOpenInNewDownFilled;
