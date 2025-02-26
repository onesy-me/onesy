import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckBoxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBoxW100Filled'

      short_name='CheckBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m424-348 248-248-20-20-228 228-114-114-20 20 134 134ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialCheckBoxW100Filled.displayName = 'OnesyIconMaterialCheckBoxW100Filled';

export default IconMaterialCheckBoxW100Filled;
