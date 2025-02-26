import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial9kW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='9kW100Filled'

      short_name='9k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-376h148v-208H280v118h120v62H280v28Zm28-118v-62h92v62h-92Zm206 118h28v-96l98 96h42L572-482l110-102h-40l-100 94v-94h-28v208ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterial9kW100Filled.displayName = 'OnesyIconMaterial9kW100Filled';

export default IconMaterial9kW100Filled;
