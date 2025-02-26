import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewArrayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewArrayW100Filled'

      short_name='ViewArray'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-252v-456h86v456h-86Zm146 0v-456h324v456H318Zm384 0v-456h86v456h-86Z"/>
    </Icon>
  );
});

IconMaterialViewArrayW100Filled.displayName = 'OnesyIconMaterialViewArrayW100Filled';

export default IconMaterialViewArrayW100Filled;
