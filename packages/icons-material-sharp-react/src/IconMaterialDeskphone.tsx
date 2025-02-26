import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeskphone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Deskphone'

      short_name='Deskphone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-200h80v-560h-80v560ZM240-400h80v-80h-80v80Zm0 120h80v-80h-80v80Zm0-240h320v-160H240v160Zm120 120h80v-80h-80v80Zm0 120h80v-80h-80v80Zm120-120h80v-80h-80v80Zm0 120h80v-80h-80v80Zm120 40v-480H200v480h400Zm-480 80v-640h480v-40h240v720H600v-40H120Zm80-80v-480 480Z"/>
    </Icon>
  );
});

IconMaterialDeskphone.displayName = 'OnesyIconMaterialDeskphone';

export default IconMaterialDeskphone;
