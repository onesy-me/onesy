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
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm87.96-482q-5.96 0-9.96 4.03-4 4.02-4 9.97v320q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-320q0-5.95-4.04-9.97-4.03-4.03-10-4.03Zm320 0q-5.96 0-9.96 4.03-4 4.02-4 9.97v240q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-240q0-5.95-4.04-9.97-4.03-4.03-10-4.03Zm-160 0q-5.96 0-9.96 4.03-4 4.02-4 9.97v120q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-120q0-5.95-4.04-9.97-4.03-4.03-10-4.03Z"/>
    </Icon>
  );
});

IconMaterialViewKanbanW100Filled.displayName = 'OnesyIconMaterialViewKanbanW100Filled';

export default IconMaterialViewKanbanW100Filled;
