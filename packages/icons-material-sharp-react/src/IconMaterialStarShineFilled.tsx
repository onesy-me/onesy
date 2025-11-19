import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStarShineFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarShineFilled'

      short_name='StarShine'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M852-212 732-332l56-56 120 120-56 56ZM708-692l-56-56 120-120 56 56-120 120Zm-456 0L132-812l56-56 120 120-56 56ZM108-212l-56-56 120-120 56 56-120 120Zm125 92 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
    </Icon>
  );
});

IconMaterialStarShineFilled.displayName = 'OnesyIconMaterialStarShineFilled';

export default IconMaterialStarShineFilled;
