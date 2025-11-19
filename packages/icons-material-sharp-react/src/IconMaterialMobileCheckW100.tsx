import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileCheckW100'

      short_name='MobileCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m442-396 162-162-20-20-142 142-56-56-20 20 76 76ZM252-92v-776h460v190h36v134h-36v452H252Zm28-28h404v-720H280v720Zm0 0v-720 720Z"/>
    </Icon>
  );
});

IconMaterialMobileCheckW100.displayName = 'OnesyIconMaterialMobileCheckW100';

export default IconMaterialMobileCheckW100;
