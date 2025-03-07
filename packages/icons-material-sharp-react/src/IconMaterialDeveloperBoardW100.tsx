import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeveloperBoardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperBoardW100'

      short_name='DeveloperBoard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M144-172v-616h616v148h56v28h-56v118h56v28h-56v118h56v28h-56v148H144Zm28-28h560v-560H172v560Zm120-120h150v-110H292v110Zm210-250h110v-70H502v70Zm-210 80h150v-150H292v150Zm210 170h110v-190H502v190ZM172-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialDeveloperBoardW100.displayName = 'OnesyIconMaterialDeveloperBoardW100';

export default IconMaterialDeveloperBoardW100;
