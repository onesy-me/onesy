import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewAgendaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewAgendaW100'

      short_name='ViewAgenda'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-540q-26 0-43-17t-17-43v-96q0-26 17-43t43-17h496q26 0 43 17t17 43v96q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-96q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v96q0 12 10 22t22 10Zm0 364q-26 0-43-17t-17-43v-96q0-26 17-43t43-17h496q26 0 43 17t17 43v96q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-96q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v96q0 12 10 22t22 10Zm-32-496v160-160Zm0 336v160-160Z"/>
    </Icon>
  );
});

IconMaterialViewAgendaW100.displayName = 'OnesyIconMaterialViewAgendaW100';

export default IconMaterialViewAgendaW100;
