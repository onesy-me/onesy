import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCustomTypographyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CustomTypographyW100Filled'

      short_name='CustomTypography'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-132v-188h28v80h294v28H494v80h-28Zm-294-80v-28h194v28H172Zm138-168h30l42-120h196l42 120h30L490-828h-20L310-380Zm82-148 86-242h4l86 242H392Z"/>
    </Icon>
  );
});

IconMaterialCustomTypographyW100Filled.displayName = 'OnesyIconMaterialCustomTypographyW100Filled';

export default IconMaterialCustomTypographyW100Filled;
