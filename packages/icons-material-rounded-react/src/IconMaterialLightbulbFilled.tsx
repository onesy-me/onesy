import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLightbulbFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightbulbFilled'

      short_name='Lightbulb'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM360-200q-17 0-28.5-11.5T320-240q0-17 11.5-28.5T360-280h240q17 0 28.5 11.5T640-240q0 17-11.5 28.5T600-200H360Zm-30-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Z"/>
    </Icon>
  );
});

IconMaterialLightbulbFilled.displayName = 'OnesyIconMaterialLightbulbFilled';

export default IconMaterialLightbulbFilled;
