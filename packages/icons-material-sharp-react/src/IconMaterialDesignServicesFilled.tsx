import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDesignServicesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesignServicesFilled'

      short_name='DesignServices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m352-522 86-87-56-57-44 44-56-56 43-44-45-45-87 87 159 158Zm328 329 87-87-45-45-44 43-56-56 43-44-57-56-86 86 158 159Zm-31-510 56 56 56-56-57-57-55 57ZM290-120H120v-170l175-175L80-680l200-200 216 216 209-210 168 170-208 209 215 215L680-80 465-295 290-120Z"/>
    </Icon>
  );
});

IconMaterialDesignServicesFilled.displayName = 'OnesyIconMaterialDesignServicesFilled';

export default IconMaterialDesignServicesFilled;
