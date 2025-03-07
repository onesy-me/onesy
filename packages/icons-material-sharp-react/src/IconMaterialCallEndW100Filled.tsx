import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallEndW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallEndW100Filled'

      short_name='CallEnd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M163-313 52-422l21-22q85-85 193-127.5T480-614q106 0 213.5 42.5T886-444l22 22-111 109-131-99v-140q-48-17-95-25.5t-91-8.5q-44 0-91 8.5T294-552v140l-131 99Z"/>
    </Icon>
  );
});

IconMaterialCallEndW100Filled.displayName = 'OnesyIconMaterialCallEndW100Filled';

export default IconMaterialCallEndW100Filled;
