import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTvOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvOff'

      short_name='TvOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M880-760v460q0 20-12.5 30T840-260q-15 0-27.5-10.5T800-301v-459H320q-20 0-30-12.5T280-800q0-15 10-27.5t30-12.5h480q33 0 56.5 23.5T880-760Zm-753-73 73 73h-40v480h406L56-792q-11-11-11.5-27.5T56-848q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11L648-200h-8v40q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160v-40H160q-33 0-56.5-23.5T80-280v-480q0-37 23.5-55l23.5-18Zm237 351Zm195-33Z"/>
    </Icon>
  );
});

IconMaterialTvOff.displayName = 'OnesyIconMaterialTvOff';

export default IconMaterialTvOff;
