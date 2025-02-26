import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineSeatLegroomExtraW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomExtraW100'

      short_name='AirlineSeatLegroomExtra'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M508-306H120v-508h28v480h360v28Zm214 138L620-374H228v-440h188v292h200l138 282 102-42 22 43-156 71Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomExtraW100.displayName = 'OnesyIconMaterialAirlineSeatLegroomExtraW100';

export default IconMaterialAirlineSeatLegroomExtraW100;
