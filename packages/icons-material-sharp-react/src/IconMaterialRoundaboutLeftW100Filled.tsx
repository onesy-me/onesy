import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoundaboutLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoundaboutLeftW100Filled'

      short_name='RoundaboutLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M599-172v-239h24q73 0 125-51t52-124q0-72-51-123t-124-51q-73 0-124 51.5T450-584v24H186l90 90-20 20-124-124 124-124 20 20-90 90h235q2-84 61-142t143-58q85 0 144 58.5T828-586q0 84-58.5 142.5T627-383v211h-28Z"/>
    </Icon>
  );
});

IconMaterialRoundaboutLeftW100Filled.displayName = 'OnesyIconMaterialRoundaboutLeftW100Filled';

export default IconMaterialRoundaboutLeftW100Filled;
