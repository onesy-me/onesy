import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineSeatLegroomNormalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomNormalW100Filled'

      short_name='AirlineSeatLegroomNormal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M637-150v-224H263v-440h188v292h246v320h108v52H637Zm-84-156H195v-508h28v480h330v28Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomNormalW100Filled.displayName = 'OnesyIconMaterialAirlineSeatLegroomNormalW100Filled';

export default IconMaterialAirlineSeatLegroomNormalW100Filled;
