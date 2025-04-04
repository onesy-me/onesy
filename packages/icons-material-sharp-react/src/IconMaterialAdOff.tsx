import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdOff'

      short_name='AdOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m791-56-64-64H120v-607l-64-65 56-56 736 736-57 56ZM200-200h447L200-647v447Zm640-33-80-80v-327H433L233-840h607v607Z"/>
    </Icon>
  );
});

IconMaterialAdOff.displayName = 'OnesyIconMaterialAdOff';

export default IconMaterialAdOff;
