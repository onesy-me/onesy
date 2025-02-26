import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GMobiledataFilled'

      short_name='GMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280v-400h360v80H360v240h200v-80h-80v-80h160v240H280Z"/>
    </Icon>
  );
});

IconMaterialGMobiledataFilled.displayName = 'OnesyIconMaterialGMobiledataFilled';

export default IconMaterialGMobiledataFilled;
