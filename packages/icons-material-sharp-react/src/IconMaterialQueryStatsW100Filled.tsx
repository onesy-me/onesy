import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQueryStatsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueryStatsW100Filled'

      short_name='QueryStats'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m98-270-23-17 168-269 120 140 158-256 74 112q-8 2-14.5 3.5T567-553l-45-67-154 251-121-141L98-270ZM863-77 722-216q-17 13-37 20t-42 7q-54 0-91-37t-37-91q0-54 37-91t91-37q54 0 91 37t37 91q0 23-7.5 43.5T742-236L883-97l-20 20ZM643-217q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm69-338q-7-2-13.5-3.5T685-561l177-282 23 17-173 271Z"/>
    </Icon>
  );
});

IconMaterialQueryStatsW100Filled.displayName = 'OnesyIconMaterialQueryStatsW100Filled';

export default IconMaterialQueryStatsW100Filled;
