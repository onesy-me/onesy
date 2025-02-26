import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineSeatLegroomNormalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomNormalFilled'

      short_name='AirlineSeatLegroomNormal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-120v-280H240v-440h240v240h280v360h120v120H640Zm-80-160H120v-560h80v480h360v80Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomNormalFilled.displayName = 'OnesyIconMaterialAirlineSeatLegroomNormalFilled';

export default IconMaterialAirlineSeatLegroomNormalFilled;
