import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileChargeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileChargeW100'

      short_name='MobileCharge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m464-320 96-192h-64v-128l-96 192h64v128ZM252-92v-776h460v190h36v134h-36v452H252Zm28-28h404v-720H280v720Zm0 0v-720 720Z"/>
    </Icon>
  );
});

IconMaterialMobileChargeW100.displayName = 'OnesyIconMaterialMobileChargeW100';

export default IconMaterialMobileChargeW100;
