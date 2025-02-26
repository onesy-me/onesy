import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFastForwardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastForwardFilled'

      short_name='FastForward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M100-240v-480l360 240-360 240Zm400 0v-480l360 240-360 240Z"/>
    </Icon>
  );
});

IconMaterialFastForwardFilled.displayName = 'OnesyIconMaterialFastForwardFilled';

export default IconMaterialFastForwardFilled;
