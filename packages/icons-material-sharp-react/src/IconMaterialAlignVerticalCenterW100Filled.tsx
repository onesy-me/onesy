import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignVerticalCenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalCenterW100Filled'

      short_name='AlignVerticalCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M311-172v-294H132v-28h179v-294h70v294h198v-174h70v174h179v28H649v174h-70v-174H381v294h-70Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalCenterW100Filled.displayName = 'OnesyIconMaterialAlignVerticalCenterW100Filled';

export default IconMaterialAlignVerticalCenterW100Filled;
