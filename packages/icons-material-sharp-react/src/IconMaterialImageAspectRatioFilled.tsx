import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImageAspectRatioFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageAspectRatioFilled'

      short_name='ImageAspectRatio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-480h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialImageAspectRatioFilled.displayName = 'OnesyIconMaterialImageAspectRatioFilled';

export default IconMaterialImageAspectRatioFilled;
