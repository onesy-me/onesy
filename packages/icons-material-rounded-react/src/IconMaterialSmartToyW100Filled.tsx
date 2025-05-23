import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmartToyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartToyW100Filled'

      short_name='SmartToy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-412q-29 0-48.5-19.5T144-480q0-29 19.5-48.5T212-548v-132q0-10.75 8.63-19.38Q229.25-708 240-708h172q0-29 19.5-48.5T480-776q29 0 48.5 19.5T548-708h172q10.75 0 19.38 8.62Q748-690.75 748-680v132q29 0 48.5 19.5T816-480q0 29-19.5 48.5T748-412v212q0 10.75-8.62 19.37Q730.75-172 720-172H240q-10.75 0-19.37-8.63Q212-189.25 212-200v-212Zm147.88-54q14.12 0 24.12-9.88 10-9.88 10-24T384.12-524q-9.88-10-24-10T336-524.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10Zm240 0q14.12 0 24.12-9.88 10-9.88 10-24T624.12-524q-9.88-10-24-10T576-524.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10ZM360-306h240q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H360q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Z"/>
    </Icon>
  );
});

IconMaterialSmartToyW100Filled.displayName = 'OnesyIconMaterialSmartToyW100Filled';

export default IconMaterialSmartToyW100Filled;
