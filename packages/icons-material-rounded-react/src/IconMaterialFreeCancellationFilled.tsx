import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFreeCancellationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FreeCancellationFilled'

      short_name='FreeCancellation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m661-173 142-142q12-12 28-11.5t28 12.5q11 12 11 28t-11 28L690-88q-12 12-28 12t-28-12l-86-86q-11-11-11-28t11-28q11-11 28-11t28 11l57 57ZM360-344l-36 36q-11 11-28 11t-28-11q-11-11-11-28t11-28l36-36-36-36q-11-11-11-28t11-28q11-11 28-11t28 11l36 36 36-36q11-11 28-11t28 11q11 11 11 28t-11 28l-36 36 36 36q11 11 11 28t-11 28q-11 11-28 11t-28-11l-36-36ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h320v-40q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v40h40q33 0 56.5 23.5T840-720v260q0 17-11.5 28T800-421q-17 0-28.5-11.5T760-461v-99H200v400h240q17 0 28.5 11.5T480-120q0 17-11.5 28.5T440-80H200Z"/>
    </Icon>
  );
});

IconMaterialFreeCancellationFilled.displayName = 'OnesyIconMaterialFreeCancellationFilled';

export default IconMaterialFreeCancellationFilled;
