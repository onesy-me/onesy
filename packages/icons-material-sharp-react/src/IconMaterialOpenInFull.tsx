import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenInFull = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInFull'

      short_name='OpenInFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-320h80v184l504-504H520v-80h320v320h-80v-184L256-200h184v80H120Z"/>
    </Icon>
  );
});

IconMaterialOpenInFull.displayName = 'OnesyIconMaterialOpenInFull';

export default IconMaterialOpenInFull;
