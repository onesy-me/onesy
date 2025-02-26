import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineSeatLegroomNormal = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomNormal'

      short_name='AirlineSeatLegroomNormal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-120v-280H240v-440h240v240h280v360h120v120H640Zm-80-160H120v-560h80v480h360v80Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomNormal.displayName = 'OnesyIconMaterialAirlineSeatLegroomNormal';

export default IconMaterialAirlineSeatLegroomNormal;
