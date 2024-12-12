import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStarRateHalfW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarRateHalfW100Filled'

      short_name='StarRateHalf'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-644v236l96 74-36-122 90-64H518l-38-124ZM330-258l56-186-144-104h180l58-192 58 192h180L574-444l56 186-150-114-150 114Z"/>
    </Icon>
  );
});

IconMaterialStarRateHalfW100Filled.displayName = 'OnesyIconMaterialStarRateHalfW100Filled';

export default IconMaterialStarRateHalfW100Filled;
