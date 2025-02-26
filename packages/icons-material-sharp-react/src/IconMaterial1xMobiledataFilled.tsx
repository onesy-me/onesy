import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial1xMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1xMobiledataFilled'

      short_name='1xMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280v-320h-80v-80h160v400h-80Zm174 0 126-212-114-188h94l66 110 68-110h92L634-492l126 212h-94l-80-134-80 134h-92Z"/>
    </Icon>
  );
});

IconMaterial1xMobiledataFilled.displayName = 'OnesyIconMaterial1xMobiledataFilled';

export default IconMaterial1xMobiledataFilled;
