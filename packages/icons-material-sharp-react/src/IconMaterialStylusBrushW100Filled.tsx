import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStylusBrushW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylusBrushW100Filled'

      short_name='StylusBrush'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-365q-82 0-140-58t-58-140q0-48 18-90t47-79.5q29-37.5 65.5-71T486-868q20 43 44.5 72t53.5 55q50 43 72 86t22 91q0 83-58 141t-140 58ZM212-172l31-84h474l31 84H212Z"/>
    </Icon>
  );
});

IconMaterialStylusBrushW100Filled.displayName = 'OnesyIconMaterialStylusBrushW100Filled';

export default IconMaterialStylusBrushW100Filled;
