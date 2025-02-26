import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToggleOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToggleOnW100'

      short_name='ToggleOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-292q-78.33 0-133.17-54.76Q92-401.53 92-479.76 92-558 146.83-613q54.84-55 133.17-55h400q78.33 0 133.17 54.76 54.83 54.77 54.83 133Q868-402 813.17-347 758.33-292 680-292H280Zm0-28h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm399.88-66q39.12 0 66.62-27.38 27.5-27.38 27.5-66.5 0-39.12-27.38-66.62-27.38-27.5-66.5-27.5-39.12 0-66.62 27.38-27.5 27.38-27.5 66.5 0 39.12 27.38 66.62 27.38 27.5 66.5 27.5ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialToggleOnW100.displayName = 'OnesyIconMaterialToggleOnW100';

export default IconMaterialToggleOnW100;
