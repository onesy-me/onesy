import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInkMarkerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkMarkerW100'

      short_name='InkMarker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m274-176-32-32-46 46-32-32 46-46-32-32 512-512 96 96-512 512Zm170-322L218-272l56 56 226-226-56-56Z"/>
    </Icon>
  );
});

IconMaterialInkMarkerW100.displayName = 'OnesyIconMaterialInkMarkerW100';

export default IconMaterialInkMarkerW100;
