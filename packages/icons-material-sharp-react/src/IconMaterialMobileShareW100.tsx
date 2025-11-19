import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileShareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileShareW100'

      short_name='MobileShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-346h28v-120h162l-70 69 20 20 103-103-103-103-20 19 69 70H360v148ZM252-92v-776h460v190h36v134h-36v452H252Zm28-28h404v-720H280v720Zm0 0v-720 720Z"/>
    </Icon>
  );
});

IconMaterialMobileShareW100.displayName = 'OnesyIconMaterialMobileShareW100';

export default IconMaterialMobileShareW100;
