import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestCamWiredStandFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamWiredStandFilled'

      short_name='NestCamWiredStand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-40H280v-120q0-84 58.5-142T480-360q11 0 21 1t20 3l22-34-74-7q-97-10-163-82.5T240-650q0-99 65.5-171.5T469-904l252-24v555l-87-8h-1l-38 57q39 27 62 70t23 94v120Z"/>
    </Icon>
  );
});

IconMaterialNestCamWiredStandFilled.displayName = 'OnesyIconMaterialNestCamWiredStandFilled';

export default IconMaterialNestCamWiredStandFilled;
