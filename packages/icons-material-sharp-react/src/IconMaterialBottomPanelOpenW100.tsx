import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBottomPanelOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomPanelOpenW100'

      short_name='BottomPanelOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M363-495h234L480-613 363-495ZM200-200h560v-120H200v120Zm0-148h560v-412H200v412Zm0 28v120-120Zm-28 148v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialBottomPanelOpenW100.displayName = 'OnesyIconMaterialBottomPanelOpenW100';

export default IconMaterialBottomPanelOpenW100;
