import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTopPanelOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopPanelOpenW100Filled'

      short_name='TopPanelOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-347 117-118H363l117 118ZM200-200h560v-412H200v412Zm-28 28v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialTopPanelOpenW100Filled.displayName = 'OnesyIconMaterialTopPanelOpenW100Filled';

export default IconMaterialTopPanelOpenW100Filled;
