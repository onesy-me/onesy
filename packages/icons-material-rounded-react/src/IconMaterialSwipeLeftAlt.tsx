import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeLeftAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeLeftAlt'

      short_name='SwipeLeftAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-280q-73 0-127.5-45.5T404-440H233l36 36q11 11 11 27.5T268-348q-11 11-28 11t-28-11L108-452q-6-6-8.5-13T97-480q0-8 2.5-15t8.5-13l104-104q11-11 27.5-11t28.5 11q12 12 12 28.5T268-555l-35 35h171q14-69 68.5-114.5T600-680q83 0 141.5 58.5T800-480q0 83-58.5 141.5T600-280Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-120Z"/>
    </Icon>
  );
});

IconMaterialSwipeLeftAlt.displayName = 'OnesyIconMaterialSwipeLeftAlt';

export default IconMaterialSwipeLeftAlt;
