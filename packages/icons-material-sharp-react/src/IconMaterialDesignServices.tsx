import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDesignServices = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesignServices'

      short_name='DesignServices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m352-522 86-87-56-57-44 44-56-56 43-44-45-45-87 87 159 158Zm328 329 87-87-45-45-44 43-56-56 43-44-57-56-86 86 158 159Zm24-567 57 57-57-57ZM290-120H120v-170l175-175L80-680l200-200 216 216 209-210 168 170-208 209 215 215L680-80 465-295 290-120Zm-90-80h56l392-391-57-57-391 392v56Zm420-419-29-29 57 57-28-28Z"/>
    </Icon>
  );
});

IconMaterialDesignServices.displayName = 'OnesyIconMaterialDesignServices';

export default IconMaterialDesignServices;
