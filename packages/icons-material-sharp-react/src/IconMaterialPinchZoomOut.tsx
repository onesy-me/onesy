import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinchZoomOut = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinchZoomOut'

      short_name='PinchZoomOut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-480v-200h60v98l119-119 42 42-119 119h98v60H40Zm261-219-42-42 119-119h-98v-60h200v200h-60v-98L301-699ZM543-40 304-280l63-65 113 32v-367h80v473l-97-27 114 114h263v-280h80v360H543Zm57-280v-200h80v200h-80Zm120 0v-160h80v160h-80Zm-20 80Z"/>
    </Icon>
  );
});

IconMaterialPinchZoomOut.displayName = 'OnesyIconMaterialPinchZoomOut';

export default IconMaterialPinchZoomOut;
