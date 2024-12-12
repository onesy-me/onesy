import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewAgendaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewAgendaW100Filled'

      short_name='ViewAgenda'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-204v-216h616v216H172Zm0-336v-216h616v216H172Z"/>
    </Icon>
  );
});

IconMaterialViewAgendaW100Filled.displayName = 'OnesyIconMaterialViewAgendaW100Filled';

export default IconMaterialViewAgendaW100Filled;
