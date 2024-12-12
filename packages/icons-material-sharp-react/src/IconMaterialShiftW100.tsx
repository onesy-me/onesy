import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShiftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShiftW100'

      short_name='Shift'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372-172v-280H230l250-346 250 346H588v280H372Zm28-28h160v-280h111L480-749 289-480h111v280Zm80-280Z"/>
    </Icon>
  );
});

IconMaterialShiftW100.displayName = 'OnesyIconMaterialShiftW100';

export default IconMaterialShiftW100;
