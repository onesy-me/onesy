import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchW100'

      short_name='Switch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-306h268v-348H346v348Zm28-28v-292h212v292H374Zm76-156h60v-60h-60v60ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialSwitchW100.displayName = 'OnesyIconMaterialSwitchW100';

export default IconMaterialSwitchW100;
