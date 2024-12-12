import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOffW100'

      short_name='EditOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m577-497-20-20 122-122-40-40-122 122-20-20 223-224 81 81-224 223ZM200-200h40l240-240-20-20-20-20-240 240v40Zm590 70L500-419 252-172h-80v-80l247-248-289-290 20-20 660 660-20 20Zm-29-590-41-41 41 41Zm-122 41 40 40-40-40ZM460-460l-20-20 40 40-20-20Z"/>
    </Icon>
  );
});

IconMaterialEditOffW100.displayName = 'OnesyIconMaterialEditOffW100';

export default IconMaterialEditOffW100;
