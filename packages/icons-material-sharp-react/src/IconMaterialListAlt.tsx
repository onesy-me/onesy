import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialListAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListAlt'

      short_name='ListAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialListAlt.displayName = 'OnesyIconMaterialListAlt';

export default IconMaterialListAlt;
