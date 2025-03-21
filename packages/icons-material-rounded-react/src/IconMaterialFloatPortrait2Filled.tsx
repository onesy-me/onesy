import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFloatPortrait2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloatPortrait2Filled'

      short_name='FloatPortrait2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-520h160q17 0 28.5-11.5T560-560v-120q0-17-11.5-28.5T520-720H360q-17 0-28.5 11.5T320-680v120q0 17 11.5 28.5T360-520Zm440 360q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640Z"/>
    </Icon>
  );
});

IconMaterialFloatPortrait2Filled.displayName = 'OnesyIconMaterialFloatPortrait2Filled';

export default IconMaterialFloatPortrait2Filled;
