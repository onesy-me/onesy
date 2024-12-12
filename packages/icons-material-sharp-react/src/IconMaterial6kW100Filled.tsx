import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial6kW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='6kW100Filled'

      short_name='6k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M514-376h28v-96l98 96h42L572-482l110-102h-40l-100 94v-94h-28v208Zm-234 0h148v-118H308v-62h120v-28H280v208Zm28-28v-62h92v62h-92ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterial6kW100Filled.displayName = 'OnesyIconMaterial6kW100Filled';

export default IconMaterial6kW100Filled;
