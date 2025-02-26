import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDevicesOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesOffW100Filled'

      short_name='DevicesOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m353-720-28-28h463v28H353Zm476 476L573-500v-90q0-13 8.5-21.5T603-620h196q13 0 21.5 8.5T829-590v346Zm-30 124-92-92H603q-13 0-21.5-8.5T573-242v-104L240-679v425h213v42H132v-42h80v-453l-85-85 20-20 672 672-20 20Z"/>
    </Icon>
  );
});

IconMaterialDevicesOffW100Filled.displayName = 'OnesyIconMaterialDevicesOffW100Filled';

export default IconMaterialDevicesOffW100Filled;
