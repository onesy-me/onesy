import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeskphoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeskphoneW100'

      short_name='Deskphone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M655-194h90v-560h-90v560ZM275-414h52v-52h-52v52Zm0 120h52v-52h-52v52Zm0-252h292v-108H275v108Zm120 132h52v-52h-52v52Zm0 120h52v-52h-52v52Zm120-120h52v-52h-52v52Zm0 120h52v-52h-52v52Zm112 60v-480H215v480h412Zm-440 28v-536h440v-40h146v616H627v-40H187Zm28-28v-480 480Z"/>
    </Icon>
  );
});

IconMaterialDeskphoneW100.displayName = 'OnesyIconMaterialDeskphoneW100';

export default IconMaterialDeskphoneW100;
