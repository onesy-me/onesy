import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUTurnLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UTurnLeftW100Filled'

      short_name='UTurnLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M669-172v-408q0-75-52.5-127.5T489-760q-75 0-127.5 52.5T309-580v209l89-89 20 20-123 123-123-123 20-20 89 89v-209q0-87 60.5-147.5T489-788q87 0 147.5 60.5T697-580v408h-28Z"/>
    </Icon>
  );
});

IconMaterialUTurnLeftW100Filled.displayName = 'OnesyIconMaterialUTurnLeftW100Filled';

export default IconMaterialUTurnLeftW100Filled;
