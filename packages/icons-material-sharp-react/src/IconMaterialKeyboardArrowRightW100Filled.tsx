import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardArrowRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowRightW100Filled'

      short_name='KeyboardArrowRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M540-480 356-664l20-20 204 204-204 204-20-20 184-184Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowRightW100Filled.displayName = 'OnesyIconMaterialKeyboardArrowRightW100Filled';

export default IconMaterialKeyboardArrowRightW100Filled;
