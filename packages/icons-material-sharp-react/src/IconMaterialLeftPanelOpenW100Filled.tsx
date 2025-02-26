import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLeftPanelOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftPanelOpenW100Filled'

      short_name='LeftPanelOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M495-597v234l118-117-118-117ZM348-200h412v-560H348v560Zm-176 28v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialLeftPanelOpenW100Filled.displayName = 'OnesyIconMaterialLeftPanelOpenW100Filled';

export default IconMaterialLeftPanelOpenW100Filled;
