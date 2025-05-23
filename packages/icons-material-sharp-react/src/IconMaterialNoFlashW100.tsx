import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoFlashW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFlashW100'

      short_name='NoFlash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M852-68 704-216v60H156v-412h122l35-39L90-830l20-20L872-88l-20 20ZM184-184h492v-60L543-377q1 4 1 7.5v7.5q0 48-33 81t-81 33q-48 0-81-33t-33-81q0-48 33-81t81-33h7.5q3.5 0 7.5 1l-65-65H184v356Zm246-92q36 0 61-25.5t25-60.5q0-36-25-61t-61-25q-35 0-60.5 25T344-362q0 35 25.5 60.5T430-276Zm274-92-28-28v-144H532l-84-84h84l51 56h121v200Zm32-222v-116h-20v-118h87l-39 86h47l-75 148Zm-60 194Zm-148 4Z"/>
    </Icon>
  );
});

IconMaterialNoFlashW100.displayName = 'OnesyIconMaterialNoFlashW100';

export default IconMaterialNoFlashW100;
