import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial10kW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='10kW100Filled'

      short_name='10k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-376h28v-208h-88v28h60v180Zm92 0h148v-208H372v208Zm28-28v-152h92v152h-92Zm184 28h28v-96l98 96h42L642-482l110-102h-40l-100 94v-94h-28v208ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterial10kW100Filled.displayName = 'OnesyIconMaterial10kW100Filled';

export default IconMaterial10kW100Filled;
