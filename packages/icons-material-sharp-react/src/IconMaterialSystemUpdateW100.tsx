import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSystemUpdateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdateW100'

      short_name='SystemUpdate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-92v-776h456v776H252Zm28-94v66h400v-66H280Zm0-28h400v-532H280v532Zm200-142L356-480l20-20 90 90v-194h28v194l90-90 20 20-124 124ZM280-774h400v-66H280v66Zm0 0v-66 66Zm0 588v66-66Z"/>
    </Icon>
  );
});

IconMaterialSystemUpdateW100.displayName = 'OnesyIconMaterialSystemUpdateW100';

export default IconMaterialSystemUpdateW100;
