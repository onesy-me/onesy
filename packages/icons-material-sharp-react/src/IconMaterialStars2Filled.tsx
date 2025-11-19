import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStars2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stars2Filled'

      short_name='Stars2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm457-560 21-89-71-59 94-8 36-84 36 84 94 8-71 59 21 89-80-47-80 47Z"/>
    </Icon>
  );
});

IconMaterialStars2Filled.displayName = 'OnesyIconMaterialStars2Filled';

export default IconMaterialStars2Filled;
