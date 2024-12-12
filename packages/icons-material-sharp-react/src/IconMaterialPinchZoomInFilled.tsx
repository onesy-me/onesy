import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinchZoomInFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinchZoomInFilled'

      short_name='PinchZoomIn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m62-460-42-42 117-118H40v-60h200v200h-60v-97L62-460Zm218-260v-200h60v98l117-118 43 43-118 117h98v60H280ZM543-40 304-280l63-65 113 32v-367h80v320h40v-160h80v160h40v-120h80v120h40v-40h80v360H543Z"/>
    </Icon>
  );
});

IconMaterialPinchZoomInFilled.displayName = 'OnesyIconMaterialPinchZoomInFilled';

export default IconMaterialPinchZoomInFilled;
