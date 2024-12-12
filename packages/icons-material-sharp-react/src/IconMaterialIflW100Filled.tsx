import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIflW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IflW100Filled'

      short_name='Ifl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M632.12-278q20.88 0 35.38-14.62 14.5-14.62 14.5-35.5 0-20.88-14.62-35.38-14.62-14.5-35.5-14.5-20.88 0-35.38 14.62-14.5 14.62-14.5 35.5 0 20.88 14.62 35.38 14.62 14.5 35.5 14.5Zm-152-152q20.88 0 35.38-14.62 14.5-14.62 14.5-35.5 0-20.88-14.62-35.38-14.62-14.5-35.5-14.5-20.88 0-35.38 14.62-14.5 14.62-14.5 35.5 0 20.88 14.62 35.38 14.62 14.5 35.5 14.5Zm-152-152q20.88 0 35.38-14.62 14.5-14.62 14.5-35.5 0-20.88-14.62-35.38-14.62-14.5-35.5-14.5-20.88 0-35.38 14.62-14.5 14.62-14.5 35.5 0 20.88 14.62 35.38 14.62 14.5 35.5 14.5ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialIflW100Filled.displayName = 'OnesyIconMaterialIflW100Filled';

export default IconMaterialIflW100Filled;
