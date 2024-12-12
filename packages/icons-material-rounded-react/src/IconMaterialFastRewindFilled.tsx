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
      <path d="M798-281 550-447q-9-6-13.5-14.5T532-480q0-10 4.5-18.5T550-513l248-166q5-4 11-5t11-1q16 0 28 11t12 29v330q0 18-12 29t-28 11q-5 0-11-1t-11-5Zm-400 0L150-447q-9-6-13.5-14.5T132-480q0-10 4.5-18.5T150-513l248-166q5-4 11-5t11-1q16 0 28 11t12 29v330q0 18-12 29t-28 11q-5 0-11-1t-11-5Z"/>
    </Icon>
  );
});

IconMaterialFastRewindFilled.displayName = 'OnesyIconMaterialFastRewindFilled';

export default IconMaterialFastRewindFilled;
