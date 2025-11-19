import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpansionPanels = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpansionPanels'

      short_name='ExpansionPanels'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-240 160-160-57-57-103 103-103-103-57 57 160 160ZM377-503l103-103 103 103 57-57-160-160-160 160 57 57ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialExpansionPanels.displayName = 'OnesyIconMaterialExpansionPanels';

export default IconMaterialExpansionPanels;
