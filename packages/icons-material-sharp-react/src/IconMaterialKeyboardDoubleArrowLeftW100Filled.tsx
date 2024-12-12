import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardDoubleArrowLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowLeftW100Filled'

      short_name='KeyboardDoubleArrowLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M453-276 249-480l204-204 20 20-184 184 184 184-20 20Zm238 0L487-480l204-204 20 20-184 184 184 184-20 20Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowLeftW100Filled.displayName = 'OnesyIconMaterialKeyboardDoubleArrowLeftW100Filled';

export default IconMaterialKeyboardDoubleArrowLeftW100Filled;
