import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial8kW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='8kW100Filled'

      short_name='8k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M514-376h28v-96l98 96h42L572-482l110-102h-40l-100 94v-94h-28v208Zm-234 0h148v-208H280v208Zm28-118v-62h92v62h-92Zm0 90v-62h92v62h-92ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterial8kW100Filled.displayName = 'OnesyIconMaterial8kW100Filled';

export default IconMaterial8kW100Filled;
