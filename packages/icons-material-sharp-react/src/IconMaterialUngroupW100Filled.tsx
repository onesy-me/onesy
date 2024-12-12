import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUngroupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UngroupW100Filled'

      short_name='Ungroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m348-329-19-19 198-198H346v-28h228v228h-28v-181L348-329Zm412-151v-280H480v-28h308v308h-28ZM172-172v-616h28v588h588v28H172Z"/>
    </Icon>
  );
});

IconMaterialUngroupW100Filled.displayName = 'OnesyIconMaterialUngroupW100Filled';

export default IconMaterialUngroupW100Filled;
