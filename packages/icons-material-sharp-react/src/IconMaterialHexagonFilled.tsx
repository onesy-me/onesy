import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHexagonFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HexagonFilled'

      short_name='Hexagon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-120 64-480l208-360h416l208 360-208 360H272Z"/>
    </Icon>
  );
});

IconMaterialHexagonFilled.displayName = 'OnesyIconMaterialHexagonFilled';

export default IconMaterialHexagonFilled;
