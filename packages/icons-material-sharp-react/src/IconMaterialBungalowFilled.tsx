import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBungalowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BungalowFilled'

      short_name='Bungalow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120v-248l-44 70-68-42 312-500 312 500-68 42-44-70v248H520v-200h-80v200H280Zm160-280h80v-80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialBungalowFilled.displayName = 'OnesyIconMaterialBungalowFilled';

export default IconMaterialBungalowFilled;
