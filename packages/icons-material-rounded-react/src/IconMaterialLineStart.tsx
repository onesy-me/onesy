import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStart'

      short_name='LineStart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M180-380q-42 0-71-29t-29-71q0-42 29-71t71-29q31 0 56 17t36 43h568q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H272q-11 26-36 43t-56 17Z"/>
    </Icon>
  );
});

IconMaterialLineStart.displayName = 'OnesyIconMaterialLineStart';

export default IconMaterialLineStart;
