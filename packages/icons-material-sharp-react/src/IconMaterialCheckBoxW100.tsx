import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckBoxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBoxW100'

      short_name='CheckBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m424-348 248-248-20-20-228 228-114-114-20 20 134 134ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialCheckBoxW100.displayName = 'OnesyIconMaterialCheckBoxW100';

export default IconMaterialCheckBoxW100;
