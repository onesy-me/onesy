import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewKanbanFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewKanbanFilled'

      short_name='ViewKanban'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280h80v-400h-80v400Zm160-200h80v-200h-80v200Zm160 120h80v-320h-80v320ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialViewKanbanFilled.displayName = 'OnesyIconMaterialViewKanbanFilled';

export default IconMaterialViewKanbanFilled;
