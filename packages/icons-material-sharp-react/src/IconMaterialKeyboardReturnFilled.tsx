import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardReturnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardReturnFilled'

      short_name='KeyboardReturn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-240 120-480l240-240 56 56-144 144h488v-160h80v240H272l144 144-56 56Z"/>
    </Icon>
  );
});

IconMaterialKeyboardReturnFilled.displayName = 'OnesyIconMaterialKeyboardReturnFilled';

export default IconMaterialKeyboardReturnFilled;
