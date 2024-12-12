import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGeneralDeviceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GeneralDeviceFilled'

      short_name='GeneralDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-240v-600h320v600H320Zm0 120v-80h320v80H320Z"/>
    </Icon>
  );
});

IconMaterialGeneralDeviceFilled.displayName = 'OnesyIconMaterialGeneralDeviceFilled';

export default IconMaterialGeneralDeviceFilled;
