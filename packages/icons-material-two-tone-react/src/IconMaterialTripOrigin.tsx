import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTripOrigin = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TripOrigin'

      short_name='TripOrigin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
    </Icon>
  );
});

IconMaterialTripOrigin.displayName = 'OnesyIconMaterialTripOrigin';

export default IconMaterialTripOrigin;
