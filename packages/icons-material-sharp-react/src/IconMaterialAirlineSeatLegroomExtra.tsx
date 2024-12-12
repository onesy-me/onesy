import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineSeatLegroomExtra = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomExtra'

      short_name='AirlineSeatLegroomExtra'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-280H80v-560h80v480h360v80Zm216 160L600-400H220v-440h240v240h169l159 324 98-45 57 105-207 96Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomExtra.displayName = 'OnesyIconMaterialAirlineSeatLegroomExtra';

export default IconMaterialAirlineSeatLegroomExtra;
