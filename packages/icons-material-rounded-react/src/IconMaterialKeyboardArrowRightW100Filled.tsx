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
      <path d="M540-480 366-654q-4-4-4.5-9.5T366-674q5-5 10-5t10 5l173 173q5 5 7 10t2 11q0 6-2 11t-7 10L386-286q-4 4-9.5 4.5T366-286q-5-5-5-10t5-10l174-174Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowRightW100Filled.displayName = 'OnesyIconMaterialKeyboardArrowRightW100Filled';

export default IconMaterialKeyboardArrowRightW100Filled;
