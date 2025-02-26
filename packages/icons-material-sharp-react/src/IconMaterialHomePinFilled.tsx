import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomePinFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomePinFilled'

      short_name='HomePin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-440h80v-110h80v110h80v-190l-120-80-120 80v190ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialHomePinFilled.displayName = 'OnesyIconMaterialHomePinFilled';

export default IconMaterialHomePinFilled;
