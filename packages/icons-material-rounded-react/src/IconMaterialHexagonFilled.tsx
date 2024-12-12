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
      <path d="M318-120q-22 0-40-10.5T249-160L87-440q-11-19-11-40t11-40l162-280q11-19 29-29.5t40-10.5h324q22 0 40 10.5t29 29.5l162 280q11 19 11 40t-11 40L711-160q-11 19-29 29.5T642-120H318Z"/>
    </Icon>
  );
});

IconMaterialHexagonFilled.displayName = 'OnesyIconMaterialHexagonFilled';

export default IconMaterialHexagonFilled;
