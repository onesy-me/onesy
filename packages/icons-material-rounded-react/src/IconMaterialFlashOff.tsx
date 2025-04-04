import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOff'

      short_name='FlashOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m657-800-57 200h45q36 0 53.5 32t-3.5 62l-25 36q-11 15-29 17t-32-12q-10-10-11.5-24t6.5-26l4-5h-61q-20 0-32-15.5t-7-35.5l66-229H320q-17 0-28.5-11.5T280-840q0-17 11.5-28.5T320-880h274q32 0 51.5 25t11.5 55ZM763-84 550-296l-95 137q-6 9-15.5 12t-18.5 0q-9-3-15-10.5t-6-18.5v-224h-40q-33 0-56.5-23.5T280-480v-86L83-763q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84ZM444-644Z"/>
    </Icon>
  );
});

IconMaterialFlashOff.displayName = 'OnesyIconMaterialFlashOff';

export default IconMaterialFlashOff;
