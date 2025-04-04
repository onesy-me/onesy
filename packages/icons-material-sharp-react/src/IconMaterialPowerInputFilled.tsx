import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPowerInputFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerInputFilled'

      short_name='PowerInput'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-360v-80h200v80H80Zm0-160v-80h760v80H80Zm280 160v-80h200v80H360Zm280 0v-80h200v80H640Z"/>
    </Icon>
  );
});

IconMaterialPowerInputFilled.displayName = 'OnesyIconMaterialPowerInputFilled';

export default IconMaterialPowerInputFilled;
