import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineSeatLegroomNormalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomNormalW100'

      short_name='AirlineSeatLegroomNormal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M637-150v-224H263v-440h188v292h246v320h108v52H637Zm-84-156H195v-508h28v480h330v28Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomNormalW100.displayName = 'OnesyIconMaterialAirlineSeatLegroomNormalW100';

export default IconMaterialAirlineSeatLegroomNormalW100;
