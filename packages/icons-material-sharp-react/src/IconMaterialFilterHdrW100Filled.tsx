import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterHdrW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterHdrW100Filled'

      short_name='FilterHdr'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m139-292 146-196 126 168h102l-92-122 144-192 256 342H139Z"/>
    </Icon>
  );
});

IconMaterialFilterHdrW100Filled.displayName = 'OnesyIconMaterialFilterHdrW100Filled';

export default IconMaterialFilterHdrW100Filled;
