import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTvGen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvGen'

      short_name='TvGen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-80H80v-600h800v600h-80v80h-40l-26-80H227l-27 80h-40Zm0-160h640v-440H160v440Zm320-220Z"/>
    </Icon>
  );
});

IconMaterialTvGen.displayName = 'OnesyIconMaterialTvGen';

export default IconMaterialTvGen;
