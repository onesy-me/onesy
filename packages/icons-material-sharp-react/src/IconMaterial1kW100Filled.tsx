import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial1kW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kW100Filled'

      short_name='1k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M508-376h28v-96l98 96h42L566-482l110-102h-40l-100 94v-94h-28v208Zm-152 0h28v-208h-88v28h60v180ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterial1kW100Filled.displayName = 'OnesyIconMaterial1kW100Filled';

export default IconMaterial1kW100Filled;
