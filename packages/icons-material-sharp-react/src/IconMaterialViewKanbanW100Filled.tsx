import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewKanbanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewKanbanW100Filled'

      short_name='ViewKanban'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-306h28v-348h-28v348Zm160-200h28v-148h-28v148Zm160 120h28v-268h-28v268ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialViewKanbanW100Filled.displayName = 'OnesyIconMaterialViewKanbanW100Filled';

export default IconMaterialViewKanbanW100Filled;
