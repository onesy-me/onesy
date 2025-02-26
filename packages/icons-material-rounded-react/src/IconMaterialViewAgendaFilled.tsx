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
      <path d="M200-520q-33 0-56.5-23.5T120-600v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v160q0 33-23.5 56.5T760-520H200Zm0 400q-33 0-56.5-23.5T120-200v-160q0-33 23.5-56.5T200-440h560q33 0 56.5 23.5T840-360v160q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterialViewAgendaFilled.displayName = 'OnesyIconMaterialViewAgendaFilled';

export default IconMaterialViewAgendaFilled;
