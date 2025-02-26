import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHlsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HlsW100Filled'

      short_name='Hls'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M136-376v-208h28v80h112v-80h28v208h-28v-100H164v100h-28Zm276 0v-208h28v180h112v28H412Zm224 0v-64h28v36h112v-66H636v-114h168v64h-28v-36H664v66h140v114H636Z"/>
    </Icon>
  );
});

IconMaterialHlsW100Filled.displayName = 'OnesyIconMaterialHlsW100Filled';

export default IconMaterialHlsW100Filled;
