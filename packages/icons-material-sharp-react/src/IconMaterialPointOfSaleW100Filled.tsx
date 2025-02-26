import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPointOfSaleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PointOfSaleW100Filled'

      short_name='PointOfSale'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-624v-164h428v164H266Zm28-28h372v-108H294v108ZM172-172v-100h616v100H172Zm0-128 115-284h386l115 284H172Zm166-60h68v-28h-68v28Zm0-68h68v-28h-68v28Zm0-68h68v-28h-68v28Zm108 136h68v-28h-68v28Zm0-68h68v-28h-68v28Zm0-68h68v-28h-68v28Zm108 136h68v-28h-68v28Zm0-68h68v-28h-68v28Zm0-68h68v-28h-68v28Z"/>
    </Icon>
  );
});

IconMaterialPointOfSaleW100Filled.displayName = 'OnesyIconMaterialPointOfSaleW100Filled';

export default IconMaterialPointOfSaleW100Filled;
