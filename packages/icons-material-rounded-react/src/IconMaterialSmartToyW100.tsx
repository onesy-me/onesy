import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmartToyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartToyW100'

      short_name='SmartToy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-412q-29 0-48.5-19.5T144-480q0-29 19.5-48.5T212-548v-100q0-24.75 17.63-42.38Q247.25-708 272-708h140q0-29 19.5-48.5T480-776q29 0 48.5 19.5T548-708h140q24.75 0 42.38 17.62Q748-672.75 748-648v100q29 0 48.5 19.5T816-480q0 29-19.5 48.5T748-412v180q0 24.75-17.62 42.37Q712.75-172 688-172H272q-24.75 0-42.37-17.63Q212-207.25 212-232v-180Zm147.88-54q14.12 0 24.12-9.88 10-9.88 10-24T384.12-524q-9.88-10-24-10T336-524.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10Zm240 0q14.12 0 24.12-9.88 10-9.88 10-24T624.12-524q-9.88-10-24-10T576-524.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10ZM360-306h240q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H360q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm-88 106h416q14 0 23-9t9-23v-416q0-14-9-23t-23-9H272q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm208-240Z"/>
    </Icon>
  );
});

IconMaterialSmartToyW100.displayName = 'OnesyIconMaterialSmartToyW100';

export default IconMaterialSmartToyW100;
