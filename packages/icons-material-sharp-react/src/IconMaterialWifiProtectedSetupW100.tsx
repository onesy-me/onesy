import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiProtectedSetupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiProtectedSetupW100'

      short_name='WifiProtectedSetup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M613-234q16-30 24.5-63t8.5-69q0-72-32-133t-86-102l-85 85v-292h292l-83 83q48 43 76 102.5T756-494q0 82-39 150T613-234Zm-388 82 84-83q-48-43-76-102.5T205-466q0-82 39-150t103-110q-16 30-24 63t-8 69q0 72 31.5 133T432-359l84-85v292H225Z"/>
    </Icon>
  );
});

IconMaterialWifiProtectedSetupW100.displayName = 'OnesyIconMaterialWifiProtectedSetupW100';

export default IconMaterialWifiProtectedSetupW100;
