import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartDiamondW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartDiamondW100'

      short_name='LineStartDiamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m360-356 124-124-124-124-124 124 124 124Zm0 40L196-480l164-164 150 150h314v28H510L360-316Zm0-164Z"/>
    </Icon>
  );
});

IconMaterialLineStartDiamondW100.displayName = 'OnesyIconMaterialLineStartDiamondW100';

export default IconMaterialLineStartDiamondW100;
