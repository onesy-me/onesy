import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial5kW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='5kW100Filled'

      short_name='5k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M514-376h28v-96l98 96h42L572-482l110-102h-40l-100 94v-94h-28v208Zm-234 0h148v-118H308v-62h120v-28H280v118h120v62H280v28ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterial5kW100Filled.displayName = 'OnesyIconMaterial5kW100Filled';

export default IconMaterial5kW100Filled;
