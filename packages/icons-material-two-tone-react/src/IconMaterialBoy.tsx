import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBoy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Boy'

      short_name='Boy'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,7.5c0.97,0,1.75-0.78,1.75-1.75S12.97,4,12,4s-1.75,0.78-1.75,1.75S11.03,7.5,12,7.5z M14,20v-5h1v-4.5 c0-1.1-0.9-2-2-2h-2c-1.1,0-2,0.9-2,2V15h1v5H14z"/></g></g>
    </Icon>
  );
});

IconMaterialBoy.displayName = 'OnesyIconMaterialBoy';

export default IconMaterialBoy;
