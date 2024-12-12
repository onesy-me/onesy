import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFastRewindW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastRewindW100'

      short_name='FastRewind'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M730-343 562-455q-7-5-10-11t-3-14q0-8 3-14t10-11l168-112q4-3 8-4t9-1q12 0 21 8t9 22v224q0 14-9 22t-21 8q-5 0-9-1t-8-4Zm-342 0L220-455q-7-5-10-11t-3-14q0-8 3-14t10-11l168-112q4-3 8-4t9-1q12 0 21 8t9 22v224q0 14-9 22t-21 8q-5 0-9-1t-8-4Zm19-137Zm342 0ZM407-364v-232L233-480l174 116Zm342 0v-232L575-480l174 116Z"/>
    </Icon>
  );
});

IconMaterialFastRewindW100.displayName = 'OnesyIconMaterialFastRewindW100';

export default IconMaterialFastRewindW100;
