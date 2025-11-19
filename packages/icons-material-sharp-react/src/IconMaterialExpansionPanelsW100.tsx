import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpansionPanelsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpansionPanelsW100'

      short_name='ExpansionPanels'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-276 124-124-20-20-104 104-104-104-20 20 124 124ZM376-540l104-104 104 104 20-20-124-124-124 124 20 20ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialExpansionPanelsW100.displayName = 'OnesyIconMaterialExpansionPanelsW100';

export default IconMaterialExpansionPanelsW100;
