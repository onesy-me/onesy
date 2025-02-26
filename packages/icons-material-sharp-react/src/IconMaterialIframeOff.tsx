import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIframeOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IframeOff'

      short_name='IframeOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M818-28 686-160H80v-640h80v114L26-820l57-57L875-85l-57 57ZM160-240h446L206-640h-46v400Zm640-34v-366H434L274-800h606v606l-80-80Zm-80-80-60-60v-86h-86l-60-60h206v206Z"/>
    </Icon>
  );
});

IconMaterialIframeOff.displayName = 'OnesyIconMaterialIframeOff';

export default IconMaterialIframeOff;
