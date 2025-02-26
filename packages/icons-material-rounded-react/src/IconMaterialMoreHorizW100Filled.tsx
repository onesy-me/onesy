import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoreHorizW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreHorizW100Filled'

      short_name='MoreHoriz'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M264-452q-11.55 0-19.77-8.23Q236-468.45 236-480q0-11.55 8.23-19.77Q252.45-508 264-508q11.55 0 19.77 8.23Q292-491.55 292-480q0 11.55-8.23 19.77Q275.55-452 264-452Zm216 0q-11.55 0-19.77-8.23Q452-468.45 452-480q0-11.55 8.23-19.77Q468.45-508 480-508q11.55 0 19.77 8.23Q508-491.55 508-480q0 11.55-8.23 19.77Q491.55-452 480-452Zm216 0q-11.55 0-19.78-8.23Q668-468.45 668-480q0-11.55 8.22-19.77Q684.45-508 696-508t19.78 8.23Q724-491.55 724-480q0 11.55-8.22 19.77Q707.55-452 696-452Z"/>
    </Icon>
  );
});

IconMaterialMoreHorizW100Filled.displayName = 'OnesyIconMaterialMoreHorizW100Filled';

export default IconMaterialMoreHorizW100Filled;
