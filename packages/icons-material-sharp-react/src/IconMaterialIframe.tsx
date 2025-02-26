import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIframe = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Iframe'

      short_name='Iframe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-420h200v-80H460v80Zm-60 60v-200h320v200H400ZM80-160v-640h800v640H80Zm80-80h640v-400H160v400Z"/>
    </Icon>
  );
});

IconMaterialIframe.displayName = 'OnesyIconMaterialIframe';

export default IconMaterialIframe;
