import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddToHomeScreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToHomeScreenW100'

      short_name='AddToHomeScreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-92v-184h28v62h400v-532H320v62h-28v-184h456v776H292Zm28-94v66h400v-66H320ZM176-316l-20-20 250-250H226v-28h228v228h-28v-180L176-316Zm144-458h400v-66H320v66Zm0 0v-66 66Zm0 588v66-66Z"/>
    </Icon>
  );
});

IconMaterialAddToHomeScreenW100.displayName = 'OnesyIconMaterialAddToHomeScreenW100';

export default IconMaterialAddToHomeScreenW100;
