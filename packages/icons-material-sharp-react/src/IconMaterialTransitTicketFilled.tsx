import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransitTicketFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitTicketFilled'

      short_name='TransitTicket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-280h240v-40l-40-20q33 0 56.5-23.5T640-420v-180q0-43-37-61.5T480-680q-83 0-121.5 19T320-600v180q0 33 23.5 56.5T400-340l-40 20v40Zm50-100q-13 0-21.5-8.5T380-410q0-13 8.5-21.5T410-440q13 0 21.5 8.5T440-410q0 13-8.5 21.5T410-380Zm140 0q-13 0-21.5-8.5T520-410q0-13 8.5-21.5T550-440q13 0 21.5 8.5T580-410q0 13-8.5 21.5T550-380ZM380-480v-120h200v120H380ZM80-160v-240q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-240h800v240q-33 0-56.5 23.5T800-480q0 33 23.5 56.5T880-400v240H80Z"/>
    </Icon>
  );
});

IconMaterialTransitTicketFilled.displayName = 'OnesyIconMaterialTransitTicketFilled';

export default IconMaterialTransitTicketFilled;
