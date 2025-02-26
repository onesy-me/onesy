import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTopPanelOpen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopPanelOpen'

      short_name='TopPanelOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-300 160-160H320l160 160ZM200-640h560v-120H200v120Zm0 440h560v-360H200v360Zm0-440v-120 120Zm-80 520v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialTopPanelOpen.displayName = 'OnesyIconMaterialTopPanelOpen';

export default IconMaterialTopPanelOpen;
