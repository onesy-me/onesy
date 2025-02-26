import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChangeHistoryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChangeHistoryFilled'

      short_name='ChangeHistory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m80-160 400-640 400 640H80Z"/>
    </Icon>
  );
});

IconMaterialChangeHistoryFilled.displayName = 'OnesyIconMaterialChangeHistoryFilled';

export default IconMaterialChangeHistoryFilled;
