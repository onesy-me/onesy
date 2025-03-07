import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationAway = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationAway'

      short_name='LocationAway'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M343-470ZM160-120q-33 0-56.5-23.5T80-200v-360q0-19 8.5-36t23.5-28l240-180q11-8 23-12t25-4q13 0 25 4t23 12l109 82q16 12 16.5 28.5T565-665q-9 12-24.5 15.5T508-658l-108-82-240 180v360h120q17 0 28.5 11.5T320-160q0 17-11.5 28.5T280-120H160Zm480-200q54 0 104.5 14t96.5 41q18 11 28.5 29.5T880-196q0 32-22 54t-54 22H476q-32 0-54-22t-22-54q0-21 10.5-39.5T439-265q46-27 96.5-41T640-320ZM486-200h308q-35-20-74-30t-80-10q-41 0-80 10t-74 30Zm154-160q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520q-17 0-28.5 11.5T600-480q0 17 11.5 28.5T640-440Zm0 240Z"/>
    </Icon>
  );
});

IconMaterialLocationAway.displayName = 'OnesyIconMaterialLocationAway';

export default IconMaterialLocationAway;
