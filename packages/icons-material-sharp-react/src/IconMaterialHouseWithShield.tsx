import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHouseWithShield = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseWithShield'

      short_name='HouseWithShield'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240q69-17 114.5-79.5T640-458v-102l-160-80-160 80v102q0 76 45.5 138.5T480-240ZM160-120v-480l320-240 320 240v480H160Zm80-80h480v-360L480-740 240-560v360Zm240-270Z"/>
    </Icon>
  );
});

IconMaterialHouseWithShield.displayName = 'OnesyIconMaterialHouseWithShield';

export default IconMaterialHouseWithShield;
