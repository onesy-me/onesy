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
      <path d="M232-540q-26 0-43-17t-17-43v-96q0-26 17-43t43-17h496q26 0 43 17t17 43v96q0 26-17 43t-43 17H232Zm0 336q-26 0-43-17t-17-43v-96q0-26 17-43t43-17h496q26 0 43 17t17 43v96q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialViewAgendaW100Filled.displayName = 'OnesyIconMaterialViewAgendaW100Filled';

export default IconMaterialViewAgendaW100Filled;
