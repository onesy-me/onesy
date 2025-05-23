import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchesFilled'

      short_name='Switches'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680q50 0 90.5 22t69.5 58h320q50 0 85 35t35 85q0 50-35 85t-85 35H440q-29 36-69.5 58T280-280Zm196-160h284q17 0 28.5-11.5T800-480q0-17-11.5-28.5T760-520H476q2 9 3 20t1 20q0 9-1 20t-3 20Z"/>
    </Icon>
  );
});

IconMaterialSwitchesFilled.displayName = 'OnesyIconMaterialSwitchesFilled';

export default IconMaterialSwitchesFilled;
