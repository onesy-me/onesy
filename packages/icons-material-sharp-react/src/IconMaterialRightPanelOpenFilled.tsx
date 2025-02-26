import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRightPanelOpenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RightPanelOpenFilled'

      short_name='RightPanelOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-320v-320L300-480l160 160ZM200-200h360v-560H200v560Zm-80 80v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialRightPanelOpenFilled.displayName = 'OnesyIconMaterialRightPanelOpenFilled';

export default IconMaterialRightPanelOpenFilled;
