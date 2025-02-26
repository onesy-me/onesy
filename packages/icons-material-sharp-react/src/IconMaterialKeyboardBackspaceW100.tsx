import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardBackspaceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardBackspaceW100'

      short_name='KeyboardBackspace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M376-276 172-480l204-204 20 20-170 170h562v28H226l170 170-20 20Z"/>
    </Icon>
  );
});

IconMaterialKeyboardBackspaceW100.displayName = 'OnesyIconMaterialKeyboardBackspaceW100';

export default IconMaterialKeyboardBackspaceW100;
