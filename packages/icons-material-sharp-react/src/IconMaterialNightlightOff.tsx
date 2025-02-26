import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightlightOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlightOff'

      short_name='NightlightOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M378 359q23-11 48.5-17t53.5-6q27 0 52 5t48 16q-34 15-61 40t-46 57l-95-95Zm102 457q-100 0-170-70t-70-170q0-51 18.5-95t51.5-76l133 133q-2 9-2.5 18.5T440 576q0 74 38.5 132T580 795q-23 11-48 16t-52 5Zm339 212L701 910q-48 32-103.5 49T480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-62 17-117.5T146 355L27 236l57-57 792 792-57 57ZM480 896q45 0 85.5-12t76.5-33L205 414q-21 36-33 76.5T160 576q0 133 93.5 226.5T480 896Zm335-100-59-59q21-35 32.5-75.5T800 576q0-133-93.5-226.5T480 256q-45 0-85.5 11.5T319 300l-59-59q48-31 103.5-48T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 61-17 116.5T815 796ZM538 518ZM424 632Z"/>
    </Icon>
  );
});

IconMaterialNightlightOff.displayName = 'OnesyIconMaterialNightlightOff';

export default IconMaterialNightlightOff;
