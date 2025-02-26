import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIframeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IframeFilled'

      short_name='Iframe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-360v-200h320v200H400ZM80-160v-640h800v640H80Zm80-80h640v-400H160v400Z"/>
    </Icon>
  );
});

IconMaterialIframeFilled.displayName = 'OnesyIconMaterialIframeFilled';

export default IconMaterialIframeFilled;
