import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHandshakeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandshakeW100'

      short_name='Handshake'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M471-107 147-431l242-242 126 126 55-55-236-236L76-580l53 53-20 20-73-73 298-298 130 130 131-131 324 324-448 448Zm-1-40 408-408-283-283-110 110 126 126-96 96-127-127-202 202 56 56 154-154 20 20-154 154 56 56 166-166 20 20-166 166 56 56 166-166 20 20-166 166 56 56ZM314-640Z"/>
    </Icon>
  );
});

IconMaterialHandshakeW100.displayName = 'OnesyIconMaterialHandshakeW100';

export default IconMaterialHandshakeW100;
