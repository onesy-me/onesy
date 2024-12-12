import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarFilled'

      short_name='Star'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
    </Icon>
  );
});

IconMaterialStarFilled.displayName = 'OnesyIconMaterialStarFilled';

export default IconMaterialStarFilled;
