import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTopPanelCloseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopPanelCloseFilled'

      short_name='TopPanelClose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-300h320L480-460 320-300ZM200-200h560v-360H200v360Zm-80 80v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialTopPanelCloseFilled.displayName = 'OnesyIconMaterialTopPanelCloseFilled';

export default IconMaterialTopPanelCloseFilled;
