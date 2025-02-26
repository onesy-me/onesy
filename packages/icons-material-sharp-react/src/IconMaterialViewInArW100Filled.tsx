import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewInArW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewInArW100Filled'

      short_name='ViewInAr'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-181 226-329v-295l254-148 254 148v295L480-181ZM132-680v-148h148v28H160v120h-28Zm148 548H132v-148h28v120h120v28Zm400 0v-28h120v-120h28v148H680Zm120-548v-120H680v-28h148v148h-28Zm-532 64-14 8v18l212 120v248l14 8 14-8v-248l212-120v-18l-14-8-212 122-212-122Z"/>
    </Icon>
  );
});

IconMaterialViewInArW100Filled.displayName = 'OnesyIconMaterialViewInArW100Filled';

export default IconMaterialViewInArW100Filled;
