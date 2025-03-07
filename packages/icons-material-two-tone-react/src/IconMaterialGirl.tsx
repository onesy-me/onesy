import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGirl = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Girl'

      short_name='Girl'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,7.5c0.97,0,1.75-0.78,1.75-1.75S12.97,4,12,4s-1.75,0.78-1.75,1.75S11.03,7.5,12,7.5z M14,16v4h-4v-4H8l2.38-6.38 C10.63,8.95,11.28,8.5,12,8.5s1.37,0.45,1.62,1.12L16,16H14z"/></g></g>
    </Icon>
  );
});

IconMaterialGirl.displayName = 'OnesyIconMaterialGirl';

export default IconMaterialGirl;
