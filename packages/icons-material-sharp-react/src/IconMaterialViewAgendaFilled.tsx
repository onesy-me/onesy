import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewAgendaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewAgendaFilled'

      short_name='ViewAgenda'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-320h720v320H120Zm0-400v-320h720v320H120Z"/>
    </Icon>
  );
});

IconMaterialViewAgendaFilled.displayName = 'OnesyIconMaterialViewAgendaFilled';

export default IconMaterialViewAgendaFilled;
