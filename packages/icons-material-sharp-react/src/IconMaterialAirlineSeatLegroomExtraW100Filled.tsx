import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineSeatLegroomExtraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomExtraW100Filled'

      short_name='AirlineSeatLegroomExtra'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M508-306H120v-508h28v480h360v28Zm214 138L620-374H228v-440h188v292h200l138 282 102-42 22 43-156 71Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomExtraW100Filled.displayName = 'OnesyIconMaterialAirlineSeatLegroomExtraW100Filled';

export default IconMaterialAirlineSeatLegroomExtraW100Filled;
