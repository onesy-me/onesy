import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileTextW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileTextW100'

      short_name='MobileText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-501h284v-28H340v28ZM252-92v-776h460v190h36v134h-36v452H252Zm28-28h404v-720H280v720Zm0 0v-720 720Z"/>
    </Icon>
  );
});

IconMaterialMobileTextW100.displayName = 'OnesyIconMaterialMobileTextW100';

export default IconMaterialMobileTextW100;
