import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFastRewindFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastRewindFilled'

      short_name='FastRewind'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M860-240 500-480l360-240v480Zm-400 0L100-480l360-240v480Z"/>
    </Icon>
  );
});

IconMaterialFastRewindFilled.displayName = 'OnesyIconMaterialFastRewindFilled';

export default IconMaterialFastRewindFilled;
