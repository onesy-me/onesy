import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardDoubleArrowLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowLeftFilled'

      short_name='KeyboardDoubleArrowLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowLeftFilled.displayName = 'OnesyIconMaterialKeyboardDoubleArrowLeftFilled';

export default IconMaterialKeyboardDoubleArrowLeftFilled;
