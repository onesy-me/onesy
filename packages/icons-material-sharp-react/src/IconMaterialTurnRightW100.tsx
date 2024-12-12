import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTurnRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnRightW100'

      short_name='TurnRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M305-212v-362h429l-90-90 20-20 124 124-124 124-20-20 90-90H333v334h-28Z"/>
    </Icon>
  );
});

IconMaterialTurnRightW100.displayName = 'OnesyIconMaterialTurnRightW100';

export default IconMaterialTurnRightW100;
