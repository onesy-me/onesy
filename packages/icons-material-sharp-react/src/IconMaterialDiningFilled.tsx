import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiningFilled'

      short_name='Dining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-200h60v-270q26-8 43-28.5t17-49.5v-152h-40v100h-30v-100h-40v100h-30v-100h-40v152q0 29 17 49.5t43 28.5v270Zm240 0h60v-254q33-16 51.5-51t18.5-82q0-57-28.5-95T590-720q-43 0-71.5 38T490-587q0 47 18.5 82t51.5 51v254ZM80-80v-800h800v800H80Z"/>
    </Icon>
  );
});

IconMaterialDiningFilled.displayName = 'OnesyIconMaterialDiningFilled';

export default IconMaterialDiningFilled;
