import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHumidityHigh = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityHigh'

      short_name='HumidityHigh'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Z"/>
    </Icon>
  );
});

IconMaterialHumidityHigh.displayName = 'OnesyIconMaterialHumidityHigh';

export default IconMaterialHumidityHigh;
