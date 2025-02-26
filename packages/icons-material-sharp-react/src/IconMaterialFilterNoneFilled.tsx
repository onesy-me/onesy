import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterNoneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterNoneFilled'

      short_name='FilterNone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Z"/>
    </Icon>
  );
});

IconMaterialFilterNoneFilled.displayName = 'OnesyIconMaterialFilterNoneFilled';

export default IconMaterialFilterNoneFilled;
