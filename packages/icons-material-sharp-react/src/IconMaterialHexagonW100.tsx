import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHexagonW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HexagonW100'

      short_name='Hexagon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M287-146 94-480l193-334h386l193 334-193 334H287Zm16-28h354l176-306-176-306H303L126-480l177 306Zm177-306Z"/>
    </Icon>
  );
});

IconMaterialHexagonW100.displayName = 'OnesyIconMaterialHexagonW100';

export default IconMaterialHexagonW100;
