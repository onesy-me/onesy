import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClimateMiniSplitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClimateMiniSplitW100'

      short_name='ClimateMiniSplit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M828-480H132v-296h696v296ZM186-248v-29q49 0 83.5-34.13Q304-345.25 304-394h29q0 61-43 103.5Q247.01-248 186-248Zm588 0q-61 0-103.5-42.71Q628-333.41 628-394h29q0 49 34.13 83 34.12 34 82.87 34v29Zm-308 42v-188h28v188h-28Zm334-302H160h640Zm-524 0v-134h409v134h-28v-106H304v106h-28Zm-116 0h640v-240H160v240Z"/>
    </Icon>
  );
});

IconMaterialClimateMiniSplitW100.displayName = 'OnesyIconMaterialClimateMiniSplitW100';

export default IconMaterialClimateMiniSplitW100;
