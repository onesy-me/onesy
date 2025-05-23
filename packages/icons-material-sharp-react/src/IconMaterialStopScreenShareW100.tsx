import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStopScreenShareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopScreenShareW100'

      short_name='StopScreenShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m556-518-50-50h28v-44l58 58-36 36Zm242 242-22-22h24v-438H338l-28-28h518v488h-30Zm58 212L720-200H80v-28h612l-40-40H132v-488h32L64-856l20-20L876-84l-20 20ZM404-516q-8 9-12 18.5t-4 23.5v80h-28v-80q0-21 7.5-37t16.5-25L185-735h-25v439h464L404-516Zm153-1Zm-152 1Z"/>
    </Icon>
  );
});

IconMaterialStopScreenShareW100.displayName = 'OnesyIconMaterialStopScreenShareW100';

export default IconMaterialStopScreenShareW100;
