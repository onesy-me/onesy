import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarW100'

      short_name='Star'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143Zm-43 59 45-192-149-129 196-17 77-181 77 181 196 17-149 129 45 192-169-102-169 102Zm169-242Z"/>
    </Icon>
  );
});

IconMaterialStarW100.displayName = 'OnesyIconMaterialStarW100';

export default IconMaterialStarW100;
