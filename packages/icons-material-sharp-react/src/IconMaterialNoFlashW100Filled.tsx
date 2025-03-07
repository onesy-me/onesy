import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoFlashW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFlashW100Filled'

      short_name='NoFlash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M852-68 704-216v60H156v-412h122l35-39L90-830l20-20L872-88l-20 20ZM445-475q-4-1-7.5-1H430q-48 0-81 33t-33 81q0 48 33 81t81 33q48 0 81-33t33-81v-7.5q0-3.5-1-7.5l-98-98Zm-15 199q-35 0-60.5-25.5T344-362q0-36 25.5-61t60.5-25q36 0 61 25t25 61q0 35-25 60.5T430-276Zm274-92L448-624h84l51 56h121v200Zm32-222v-116h-20v-118h87l-39 86h47l-75 148Z"/>
    </Icon>
  );
});

IconMaterialNoFlashW100Filled.displayName = 'OnesyIconMaterialNoFlashW100Filled';

export default IconMaterialNoFlashW100Filled;
