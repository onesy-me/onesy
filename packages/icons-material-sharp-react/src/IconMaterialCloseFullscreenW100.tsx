import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloseFullscreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseFullscreenW100'

      short_name='CloseFullscreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m151-132-19-19 301-301H212v-28h268v268h-28v-221L151-132Zm329-348v-268h28v221l301-301 19 19-301 301h221v28H480Z"/>
    </Icon>
  );
});

IconMaterialCloseFullscreenW100.displayName = 'OnesyIconMaterialCloseFullscreenW100';

export default IconMaterialCloseFullscreenW100;
