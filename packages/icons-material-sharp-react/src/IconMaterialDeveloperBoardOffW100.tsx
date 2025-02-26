import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeveloperBoardOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperBoardOffW100'

      short_name='DeveloperBoardOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M859-75 97-837l20-20L879-95l-20 20ZM301-788h459v148h56v28h-56v109h56v28h-56v109h56v28h-64l-20-20v-402H329l-28-28Zm145 158-10-10h10v10Zm73 60-17-17v-53h110v70h-93Zm93 110-50-50h50v50Zm-146 6Zm53-116ZM292-320v-110h154v110H292ZM187-787l27 27h-42v560h560v-42l27 27v43H144v-615h43Zm315 315 110 110v42H502v-152ZM334-640l112 112v38H292v-150h42Z"/>
    </Icon>
  );
});

IconMaterialDeveloperBoardOffW100.displayName = 'OnesyIconMaterialDeveloperBoardOffW100';

export default IconMaterialDeveloperBoardOffW100;
