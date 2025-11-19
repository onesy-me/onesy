import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileTicketW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileTicketW100Filled'

      short_name='MobileTicket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-92v-776h460v190h36v134h-36v452H252Zm100-260h256v-96q-13.6 0-22.8-9.2-9.2-9.2-9.2-22.8 0-13.6 9.2-22.8 9.2-9.2 22.8-9.2v-96H352v96q13.6 0 22.8 9.2 9.2 9.2 9.2 22.8 0 13.6-9.2 22.8-9.2 9.2-22.8 9.2v96Zm128-48q-7 0-11.5-4.5T464-416q0-7 4.5-11.5T480-432q7 0 11.5 4.5T496-416q0 7-4.5 11.5T480-400Zm0-64q-7 0-11.5-4.5T464-480q0-7 4.5-11.5T480-496q7 0 11.5 4.5T496-480q0 7-4.5 11.5T480-464Zm0-64q-7 0-11.5-4.5T464-544q0-7 4.5-11.5T480-560q7 0 11.5 4.5T496-544q0 7-4.5 11.5T480-528Z"/>
    </Icon>
  );
});

IconMaterialMobileTicketW100Filled.displayName = 'OnesyIconMaterialMobileTicketW100Filled';

export default IconMaterialMobileTicketW100Filled;
