import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBottomPanelOpenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomPanelOpenFilled'

      short_name='BottomPanelOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-500h320L480-660 320-500ZM200-400h560v-360H200v360Zm-80 280v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialBottomPanelOpenFilled.displayName = 'OnesyIconMaterialBottomPanelOpenFilled';

export default IconMaterialBottomPanelOpenFilled;
