import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStarHalf = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarHalf'

      short_name='StarHalf'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m606-286-33-144 111-96-146-13-58-136v312l126 77ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
    </Icon>
  );
});

IconMaterialStarHalf.displayName = 'OnesyIconMaterialStarHalf';

export default IconMaterialStarHalf;
