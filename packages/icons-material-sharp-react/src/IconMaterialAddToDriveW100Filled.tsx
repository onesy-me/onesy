import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddToDriveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToDriveW100Filled'

      short_name='AddToDrive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240.41-152q-13.12 0-26.24-7.5T195-178l-80-140q-6-11-6.5-26t6.5-26l240-412q7-11 19.5-18.5T400-808h160q13 0 25.5 7.5T605-782l152 261q-8 0-15.5.5t-15.64 1.5L574-780H386L132-344l94 164h315.53q3.09 8 6.7 14.5 3.62 6.5 8.77 13.5H240.41ZM305-306l-14-25 174-303h30l102 177.23q-5 5.16-10 10.86-5 5.69-10 10.91l-97-169-155 270h201q-2 7-3 13.5t-2 14.5H305Zm441 160v-120H626v-28h120v-120h28v120h120v28H774v120h-28Z"/>
    </Icon>
  );
});

IconMaterialAddToDriveW100Filled.displayName = 'OnesyIconMaterialAddToDriveW100Filled';

export default IconMaterialAddToDriveW100Filled;
