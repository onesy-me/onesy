import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenRun = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenRun'

      short_name='OpenRun'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-193 85-85 57 56L480-80 338-222l57-56 85 85ZM193-480l85 85-56 57L80-480l142-142 56 57-85 85Zm574 0-85-85 56-57 142 142-142 142-56-57 85-85ZM480-767l-85 85-57-56 142-142 142 142-57 56-85-85Z"/>
    </Icon>
  );
});

IconMaterialOpenRun.displayName = 'OnesyIconMaterialOpenRun';

export default IconMaterialOpenRun;
