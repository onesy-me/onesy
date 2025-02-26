import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardDoubleArrowRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowRight'

      short_name='KeyboardDoubleArrowRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowRight.displayName = 'OnesyIconMaterialKeyboardDoubleArrowRight';

export default IconMaterialKeyboardDoubleArrowRight;
