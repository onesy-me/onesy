import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrivacyScreenOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyScreenOff'

      short_name='PrivacyScreenOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M790 999 686 896H160q-33 0-56.5-23.5T80 816V336q0-10 2-19.5t7-17.5l-35-35q-12-12-11.5-28.5T55 207q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T790 999ZM160 760l195-195-83-84-112 112v167Zm0-280 55-55-55-55v110Zm56 336h390L411 621 216 816Zm654 37-70-71V336H696L525 507l-56-56 114-115H416l-30 32-112-112h526q33 0 56.5 23.5T880 336v480q0 11-2.5 20t-7.5 17ZM383 593Zm194-34Z"/>
    </Icon>
  );
});

IconMaterialPrivacyScreenOff.displayName = 'OnesyIconMaterialPrivacyScreenOff';

export default IconMaterialPrivacyScreenOff;
