import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestGaleWifiFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestGaleWifiFilled'

      short_name='NestGaleWifi'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m104-560 16-240h720l16 240H104Zm96 400-13-40H80l19-280h762l19 280H773l-13 40H200Z"/>
    </Icon>
  );
});

IconMaterialNestGaleWifiFilled.displayName = 'OnesyIconMaterialNestGaleWifiFilled';

export default IconMaterialNestGaleWifiFilled;
