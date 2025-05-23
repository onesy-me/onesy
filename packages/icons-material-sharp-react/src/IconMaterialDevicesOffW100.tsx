import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDevicesOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesOffW100'

      short_name='DevicesOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m353-720-28-28h463v28H353Zm476 476-28-28v-320H601v120l-28-28v-90q0-12.75 8.63-21.38Q590.25-620 603-620h196q12.75 0 21.38 8.62Q829-602.75 829-590v346Zm-30 124-92-92H603q-12.75 0-21.37-8.63Q573-229.25 573-242v-104L240-679v425h213v42H132v-42h80v-453l-85-85 20-20 672 672-20 20Zm-98-252Z"/>
    </Icon>
  );
});

IconMaterialDevicesOffW100.displayName = 'OnesyIconMaterialDevicesOffW100';

export default IconMaterialDevicesOffW100;
