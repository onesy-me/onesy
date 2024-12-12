import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidthNormalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthNormalW100Filled'

      short_name='WidthNormal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-25 0-42.5-17.5T132-272v-416q0-25 17.5-42.5T192-748h576q25 0 42.5 17.5T828-688v416q0 25-17.5 42.5T768-212H192Zm0-28h180v-480H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm396 0h180q14 0 23-9t9-23v-416q0-14-9-23t-23-9H588v480Z"/>
    </Icon>
  );
});

IconMaterialWidthNormalW100Filled.displayName = 'OnesyIconMaterialWidthNormalW100Filled';

export default IconMaterialWidthNormalW100Filled;
