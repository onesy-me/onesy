import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoundaboutRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoundaboutRightW100'

      short_name='RoundaboutRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M333-172v-211q-84-2-142.5-60.5T132-586q0-85 59-143.5T335-788q84 0 143 58t61 142h235l-90-90 20-20 124 124-124 124-20-20 90-90H510v-24q0-73-51-124.5T335-760q-73 0-124 51t-51 123q0 73 52 124t125 51h24v239h-28Z"/>
    </Icon>
  );
});

IconMaterialRoundaboutRightW100.displayName = 'OnesyIconMaterialRoundaboutRightW100';

export default IconMaterialRoundaboutRightW100;
