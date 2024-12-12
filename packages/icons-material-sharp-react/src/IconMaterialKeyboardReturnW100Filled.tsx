import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardReturnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardReturnW100Filled'

      short_name='KeyboardReturn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M376-276 172-480l204-204 20 20-170 170h534v-160h28v188H226l170 170-20 20Z"/>
    </Icon>
  );
});

IconMaterialKeyboardReturnW100Filled.displayName = 'OnesyIconMaterialKeyboardReturnW100Filled';

export default IconMaterialKeyboardReturnW100Filled;
