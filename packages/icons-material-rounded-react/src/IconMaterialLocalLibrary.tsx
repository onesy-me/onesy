import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalLibrary = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalLibrary'

      short_name='LocalLibrary'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-274v-286q0-32 23.5-54t55.5-20q79 12 150.5 46.5T480-498q59-55 130.5-89.5T761-634q32-2 55.5 20t23.5 54v286q0 32-21 54.5T766-195q-64 10-124 33t-112 61q-11 9-23.5 13.5T480-83q-14 0-26.5-4.5T430-101q-52-38-112-61t-124-33q-32-2-53-24.5T120-274Zm360 110q63-47 134-75t146-37v-276q-73 13-143.5 52.5T480-394q-66-66-136.5-105.5T200-552v276q75 9 146 37t134 75Zm0-436q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-760q0-33-23.5-56.5T480-840q-33 0-56.5 23.5T400-760q0 33 23.5 56.5T480-680Zm0-80Zm0 366Z"/>
    </Icon>
  );
});

IconMaterialLocalLibrary.displayName = 'OnesyIconMaterialLocalLibrary';

export default IconMaterialLocalLibrary;
