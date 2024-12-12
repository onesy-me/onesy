import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeveloperBoardOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperBoardOffW100Filled'

      short_name='DeveloperBoardOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M752-338 612-478v-32h-32l-60-60h92v-70H502v53l-43-43v-10h-10L301-788h459v148h56v28h-56v109h56v28h-56v109h56v28h-64Zm-460 18h154v-110H292v110ZM187-787l572 572v43H144v-615h43Zm315 315v152h110v-42L502-472ZM334-640h-42v150h154v-38L334-640ZM859-75 97-837l20-20L879-95l-20 20Z"/>
    </Icon>
  );
});

IconMaterialDeveloperBoardOffW100Filled.displayName = 'OnesyIconMaterialDeveloperBoardOffW100Filled';

export default IconMaterialDeveloperBoardOffW100Filled;
