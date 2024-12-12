import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartCircle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartCircle'

      short_name='LineStartCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h283q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H557q-14 86-80.5 143T320-240Zm0-240Z"/>
    </Icon>
  );
});

IconMaterialLineStartCircle.displayName = 'OnesyIconMaterialLineStartCircle';

export default IconMaterialLineStartCircle;
