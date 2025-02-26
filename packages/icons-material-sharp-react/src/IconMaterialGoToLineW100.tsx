import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGoToLineW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GoToLineW100'

      short_name='GoToLine'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M446-680v-68h68v68h-68Zm0 468v-68h68v68h-68Z"/>
    </Icon>
  );
});

IconMaterialGoToLineW100.displayName = 'OnesyIconMaterialGoToLineW100';

export default IconMaterialGoToLineW100;
