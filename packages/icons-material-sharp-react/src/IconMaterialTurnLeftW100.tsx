import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTurnLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnLeftW100'

      short_name='TurnLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M627-212v-334H226l90 90-20 20-124-124 124-124 20 20-90 90h429v362h-28Z"/>
    </Icon>
  );
});

IconMaterialTurnLeftW100.displayName = 'OnesyIconMaterialTurnLeftW100';

export default IconMaterialTurnLeftW100;
