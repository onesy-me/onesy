import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinchZoomOutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinchZoomOutW100Filled'

      short_name='PinchZoomOut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M72-480v-168h28v120l134-134 20 20-134 134h120v28H72Zm246-226-20-20 134-134H312v-28h168v168h-28v-120L318-706Zm197 602L292-326l29-27 145 35v-348h28v308h83v-174h28v174h84v-134h28v134h83v-54h28v308H515Z"/>
    </Icon>
  );
});

IconMaterialPinchZoomOutW100Filled.displayName = 'OnesyIconMaterialPinchZoomOutW100Filled';

export default IconMaterialPinchZoomOutW100Filled;
