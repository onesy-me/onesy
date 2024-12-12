import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenInNewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewW100Filled'

      short_name='OpenInNew'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h268v28H200v560h560v-240h28v268H172Zm218-198-20-20 370-370H560v-28h228v228h-28v-180L390-370Z"/>
    </Icon>
  );
});

IconMaterialOpenInNewW100Filled.displayName = 'OnesyIconMaterialOpenInNewW100Filled';

export default IconMaterialOpenInNewW100Filled;
