import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHandshakeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandshakeFilled'

      short_name='Handshake'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m484-104 446-446-340-340-82 82 236 236-113 113-207-207-251 252 56 56 213-213 29 28-212 214 56 56 213-213 28 28-213 213 56 56 213-213 29 29-213 213 56 56ZM141-440l282-282 207 207 57-57-318-318L30-551l111 111Z"/>
    </Icon>
  );
});

IconMaterialHandshakeFilled.displayName = 'OnesyIconMaterialHandshakeFilled';

export default IconMaterialHandshakeFilled;
