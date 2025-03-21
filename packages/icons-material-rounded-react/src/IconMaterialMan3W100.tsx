import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMan3W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man3W100'

      short_name='Man3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M412-126v-228h-38q-12.75 0-21.37-8.63Q344-371.25 344-384v-204q0-24.75 17.63-42.38Q379.25-648 404-648h152q24.75 0 42.38 17.62Q616-612.75 616-588v204q0 12.75-8.62 21.37Q598.75-354 586-354h-38v228q0 12.75-8.62 21.37Q530.75-96 518-96h-76q-12.75 0-21.37-8.63Q412-113.25 412-126Zm47-605-32-32q-9-9-9-21t9-21l32-32q9-9 21-9t21 9l32 32q9 9 9 21t-9 21l-32 32q-9 9-21 9t-21-9Z"/>
    </Icon>
  );
});

IconMaterialMan3W100.displayName = 'OnesyIconMaterialMan3W100';

export default IconMaterialMan3W100;
