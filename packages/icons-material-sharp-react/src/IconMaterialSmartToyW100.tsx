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
      <path d="M212-412q-29 0-48.5-19.5T144-480q0-29 19.5-48.5T212-548v-160h200q0-29 19.5-48.5T480-776q29 0 48.5 19.5T548-708h200v160q29 0 48.5 19.5T816-480q0 29-19.5 48.5T748-412v240H212v-240Zm147.88-54q14.12 0 24.12-9.88 10-9.88 10-24T384.12-524q-9.88-10-24-10T336-524.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10Zm240 0q14.12 0 24.12-9.88 10-9.88 10-24T624.12-524q-9.88-10-24-10T576-524.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10ZM346-306h268v-28H346v28ZM240-200h480v-480H240v480Zm240-240Z"/>
    </Icon>
  );
});

IconMaterialSmartToyW100.displayName = 'OnesyIconMaterialSmartToyW100';

export default IconMaterialSmartToyW100;
