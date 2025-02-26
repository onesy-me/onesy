import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial4kW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4kW100Filled'

      short_name='4k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M514-376h28v-96l98 96h42L572-482l110-102h-40l-100 94v-94h-28v208Zm-126 0h28v-60h52v-28h-52v-120h-28v120h-80v-120h-28v148h108v60ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterial4kW100Filled.displayName = 'OnesyIconMaterial4kW100Filled';

export default IconMaterial4kW100Filled;
