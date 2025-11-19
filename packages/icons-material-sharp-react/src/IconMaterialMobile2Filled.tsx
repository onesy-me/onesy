import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobile2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mobile2Filled'

      short_name='Mobile2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-160q17 0 28.5-11.5T520-200q0-17-11.5-28.5T480-240q-17 0-28.5 11.5T440-200q0 17 11.5 28.5T480-160ZM200-40v-880h560v204h40v192h-40v484H200Z"/>
    </Icon>
  );
});

IconMaterialMobile2Filled.displayName = 'OnesyIconMaterialMobile2Filled';

export default IconMaterialMobile2Filled;
