import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStarHalfW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarHalfW100'

      short_name='StarHalf'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m606-286-33-144 111-96-146-13-58-136v312l126 77Zm-295 58 45-192-149-129 196-17 77-181 77 181 196 17-149 129 45 192-169-102-169 102Z"/>
    </Icon>
  );
});

IconMaterialStarHalfW100.displayName = 'OnesyIconMaterialStarHalfW100';

export default IconMaterialStarHalfW100;
