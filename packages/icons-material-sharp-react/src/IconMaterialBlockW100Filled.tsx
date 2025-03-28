import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBlockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlockW100Filled'

      short_name='Block'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q59.96 0 115.48-21.5T696-244L244-696q-40 45-62 100.52-22 55.52-22 115.48 0 134 93 227t227 93Zm236-104q41-45 62.5-100.52Q800-420.04 800-480q0-134-93-227t-227-93q-60.31 0-116.16 21Q308-758 264-716l452 452Z"/>
    </Icon>
  );
});

IconMaterialBlockW100Filled.displayName = 'OnesyIconMaterialBlockW100Filled';

export default IconMaterialBlockW100Filled;
