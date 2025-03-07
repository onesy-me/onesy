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
      <path d="M172-204v-216h616v216H172Zm28-28h560v-160H200v160Zm-28-308v-216h616v216H172Zm28-28h560v-160H200v160Zm0 176v160-160Zm0-336v160-160Z"/>
    </Icon>
  );
});

IconMaterialViewAgendaW100.displayName = 'OnesyIconMaterialViewAgendaW100';

export default IconMaterialViewAgendaW100;
