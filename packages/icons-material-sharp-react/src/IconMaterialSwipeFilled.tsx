import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeFilled'

      short_name='Swipe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M880-680H680v-60h116q-66-58-147-89t-169-31q-88 0-169 31t-147 89h116v60H80v-200h60v81q72-59 159-90t181-31q94 0 181 31t159 90v-81h60v200ZM423-80 184-320l63-65 113 32v-367h80v320h40v-160h80v160h40v-120h80v120h40v-40h80v360H423Z"/>
    </Icon>
  );
});

IconMaterialSwipeFilled.displayName = 'OnesyIconMaterialSwipeFilled';

export default IconMaterialSwipeFilled;
