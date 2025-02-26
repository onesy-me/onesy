import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChangeHistory = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChangeHistory'

      short_name='ChangeHistory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m80-160 400-640 400 640H80Zm144-80h512L480-650 224-240Zm256-205Z"/>
    </Icon>
  );
});

IconMaterialChangeHistory.displayName = 'OnesyIconMaterialChangeHistory';

export default IconMaterialChangeHistory;
