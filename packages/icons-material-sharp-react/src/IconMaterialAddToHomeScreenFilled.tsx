import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddToHomeScreenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToHomeScreenFilled'

      short_name='AddToHomeScreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-40v-240h80v40h400v-480H320v40h-80v-240h560v880H240Zm-64-240-56-56 224-224H200v-80h280v280h-80v-144L176-280Z"/>
    </Icon>
  );
});

IconMaterialAddToHomeScreenFilled.displayName = 'OnesyIconMaterialAddToHomeScreenFilled';

export default IconMaterialAddToHomeScreenFilled;
