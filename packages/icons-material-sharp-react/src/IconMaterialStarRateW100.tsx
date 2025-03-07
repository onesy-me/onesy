import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStarRateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarRateW100'

      short_name='StarRate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m384-334 96-74 96 74-36-122 90-64H518l-38-124-38 124H330l90 64-36 122Zm-54 76 56-186-144-104h180l58-192 58 192h180L574-444l56 186-150-114-150 114Zm150-231Z"/>
    </Icon>
  );
});

IconMaterialStarRateW100.displayName = 'OnesyIconMaterialStarRateW100';

export default IconMaterialStarRateW100;
