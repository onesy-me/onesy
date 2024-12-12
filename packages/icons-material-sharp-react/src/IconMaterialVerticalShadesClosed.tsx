import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalShadesClosed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalShadesClosed'

      short_name='VerticalShadesClosed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-80h80v-640h640v640h80v80H80Zm160-80h60v-560h-60v560Zm140 0h60v-560h-60v560Zm140 0h60v-560h-60v560Zm140 0h60v-560h-60v560Z"/>
    </Icon>
  );
});

IconMaterialVerticalShadesClosed.displayName = 'OnesyIconMaterialVerticalShadesClosed';

export default IconMaterialVerticalShadesClosed;
