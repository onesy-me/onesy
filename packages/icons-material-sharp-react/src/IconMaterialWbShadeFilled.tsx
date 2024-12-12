import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWbShadeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbShadeFilled'

      short_name='WbShade'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M780-160 560-380v-100l320 320H780Zm-220 0v-120l120 120H560Zm-400 0v-400H80l240-240 240 240h-80v400H160Zm120-240h80v-160h-80v160Z"/>
    </Icon>
  );
});

IconMaterialWbShadeFilled.displayName = 'OnesyIconMaterialWbShadeFilled';

export default IconMaterialWbShadeFilled;
