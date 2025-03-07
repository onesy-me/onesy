import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuietTimeActiveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeActiveFilled'

      short_name='QuietTimeActive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M806-235 235-806q43-44 97.5-73T450-920q-18 99 11 193.5T561-561q71 71 165.5 100T920-450q-11 63-40.5 117.5T806-235ZM775-38 667-146q-34 13-69.5 19.5T524-120q-84 0-157.5-32t-128-86.5Q184-293 152-366.5T120-524q0-38 6.5-73.5T146-667L39-774l57-57L832-95l-57 57Z"/>
    </Icon>
  );
});

IconMaterialQuietTimeActiveFilled.displayName = 'OnesyIconMaterialQuietTimeActiveFilled';

export default IconMaterialQuietTimeActiveFilled;
