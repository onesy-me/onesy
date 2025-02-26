import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHexagonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HexagonW100Filled'

      short_name='Hexagon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M287-146 94-480l193-334h386l193 334-193 334H287Z"/>
    </Icon>
  );
});

IconMaterialHexagonW100Filled.displayName = 'OnesyIconMaterialHexagonW100Filled';

export default IconMaterialHexagonW100Filled;
