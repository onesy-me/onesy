import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddRoadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRoadW100Filled'

      short_name='AddRoad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M694-54v-120H574v-28h120v-120h28v120h120v28H722v120h-28Zm0-388v-332h28v332h-28ZM238-174v-600h28v600h-28Zm228-480v-120h28v120h-28Zm0 240v-120h28v120h-28Zm0 240v-120h28v120h-28Z"/>
    </Icon>
  );
});

IconMaterialAddRoadW100Filled.displayName = 'OnesyIconMaterialAddRoadW100Filled';

export default IconMaterialAddRoadW100Filled;
