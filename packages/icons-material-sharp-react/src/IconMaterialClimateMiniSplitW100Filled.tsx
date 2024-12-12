import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClimateMiniSplitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClimateMiniSplitW100Filled'

      short_name='ClimateMiniSplit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-480v-296h696v296H685v-162H276v162H132Zm172 86h29q0 61-43 103.5Q247.01-248 186-248v-29q49 0 83.5-34.13Q304-345.25 304-394Zm0-86v-134h353v134H304Zm162 274v-188h28v188h-28Zm162-188h29q0 49 34.13 83 34.12 34 82.87 34v29q-61 0-103.5-42.71Q628-333.41 628-394Z"/>
    </Icon>
  );
});

IconMaterialClimateMiniSplitW100Filled.displayName = 'OnesyIconMaterialClimateMiniSplitW100Filled';

export default IconMaterialClimateMiniSplitW100Filled;
