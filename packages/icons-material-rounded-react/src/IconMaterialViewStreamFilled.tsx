import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewStreamFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewStreamFilled'

      short_name='ViewStream'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200q-33 0-56.5-23.5T120-280v-80q0-33 23.5-56.5T200-440h560q33 0 56.5 23.5T840-360v80q0 33-23.5 56.5T760-200H200Zm0-320q-33 0-56.5-23.5T120-600v-80q0-33 23.5-56.5T200-760h560q33 0 56.5 23.5T840-680v80q0 33-23.5 56.5T760-520H200Z"/>
    </Icon>
  );
});

IconMaterialViewStreamFilled.displayName = 'OnesyIconMaterialViewStreamFilled';

export default IconMaterialViewStreamFilled;
