import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEndDiamondW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndDiamondW100'

      short_name='LineEndDiamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m600-356 124-124-124-124-124 124 124 124Zm-21 19L450-466H150q-6 0-10-4t-4-10q0-6 4-10t10-4h300l129-129q9-9 21-9t21 9l122 122q9 9 9 21t-9 21L621-337q-9 9-21 9t-21-9Zm21-143Z"/>
    </Icon>
  );
});

IconMaterialLineEndDiamondW100.displayName = 'OnesyIconMaterialLineEndDiamondW100';

export default IconMaterialLineEndDiamondW100;
