import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnarchive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Unarchive'

      short_name='Unarchive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-560 320-400l56 56 64-64v168h80v-168l64 64 56-56-160-160Zm-280-80v440h560v-440H200Zm-80 520v-608l92-112h536l92 112v608H120Zm96-600h528l-34-40H250l-34 40Zm264 300Z"/>
    </Icon>
  );
});

IconMaterialUnarchive.displayName = 'OnesyIconMaterialUnarchive';

export default IconMaterialUnarchive;
