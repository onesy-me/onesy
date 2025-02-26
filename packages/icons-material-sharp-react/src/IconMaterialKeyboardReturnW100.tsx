import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardReturnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardReturnW100'

      short_name='KeyboardReturn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M376-276 172-480l204-204 20 20-170 170h534v-160h28v188H226l170 170-20 20Z"/>
    </Icon>
  );
});

IconMaterialKeyboardReturnW100.displayName = 'OnesyIconMaterialKeyboardReturnW100';

export default IconMaterialKeyboardReturnW100;
