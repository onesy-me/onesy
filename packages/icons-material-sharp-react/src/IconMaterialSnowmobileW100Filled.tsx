import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSnowmobileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnowmobileW100Filled'

      short_name='Snowmobile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M268-186H78q-26 0-40-17t-14-37q0-14 7.5-26.5T53-287l198-108-216-61 58-116 352 40 155-116-62-58h-94v-28h105l289 269q8 7 11 16t3 19q0 33-27 58.5T741-346h-62l142 132h17q20 0 40-13t29-37h29q-9 35-37.5 56.5T838-186H624v-28h156L638-346H444q0 74-49 117t-127 43ZM78-214h190q66 0 107-35t41-99l-127-36L75-268q-9 5-16 11t-7 17q0 11 7.5 18.5T78-214Z"/>
    </Icon>
  );
});

IconMaterialSnowmobileW100Filled.displayName = 'OnesyIconMaterialSnowmobileW100Filled';

export default IconMaterialSnowmobileW100Filled;
