import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEndDiamondFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndDiamondFilled'

      short_name='LineEndDiamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-200 360-440H80v-80h280l240-240 280 280-280 280Z"/>
    </Icon>
  );
});

IconMaterialLineEndDiamondFilled.displayName = 'OnesyIconMaterialLineEndDiamondFilled';

export default IconMaterialLineEndDiamondFilled;
