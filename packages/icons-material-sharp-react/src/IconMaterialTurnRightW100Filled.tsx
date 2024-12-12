import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTurnRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnRightW100Filled'

      short_name='TurnRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M305-212v-362h429l-90-90 20-20 124 124-124 124-20-20 90-90H333v334h-28Z"/>
    </Icon>
  );
});

IconMaterialTurnRightW100Filled.displayName = 'OnesyIconMaterialTurnRightW100Filled';

export default IconMaterialTurnRightW100Filled;
