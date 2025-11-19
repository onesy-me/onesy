import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMenuBook2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuBook2Filled'

      short_name='MenuBook2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-160h-40v-80h40v-120h-40v-80h40v-120h-40v-80h40v-160h640v800H160Zm220-200h60v-160q26-7 43-28.5t17-48.5v-163h-40v151h-30v-151h-40v151h-30v-151h-40v163q0 27 17 48.5t43 28.5v160Zm220 0h60v-400q-50 0-85 35t-35 85v120h60v160Z"/>
    </Icon>
  );
});

IconMaterialMenuBook2Filled.displayName = 'OnesyIconMaterialMenuBook2Filled';

export default IconMaterialMenuBook2Filled;
