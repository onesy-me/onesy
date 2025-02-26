import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineSeatLegroomReducedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomReducedFilled'

      short_name='AirlineSeatLegroomReduced'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-120v-120l40-160H240v-440h240v240h250l38 51-88 309h120v120H560Zm-80-160H120v-560h80v480h280v80Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomReducedFilled.displayName = 'OnesyIconMaterialAirlineSeatLegroomReducedFilled';

export default IconMaterialAirlineSeatLegroomReducedFilled;
