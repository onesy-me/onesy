import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWbShadeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbShadeW100Filled'

      short_name='WbShade'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M767-200 557-410v-40l250 250h-40Zm-210 0v-80l80 80h-80Zm-360 0v-380h-44l164-164 164 164h-44v380H197Zm52-172h136v-208H249v208Z"/>
    </Icon>
  );
});

IconMaterialWbShadeW100Filled.displayName = 'OnesyIconMaterialWbShadeW100Filled';

export default IconMaterialWbShadeW100Filled;
