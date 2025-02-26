import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSearchCheck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchCheck'

      short_name='SearchCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m358-488-97-96 42-42 54 54 100-100 42 42-141 142Zm426 368L532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
    </Icon>
  );
});

IconMaterialSearchCheck.displayName = 'OnesyIconMaterialSearchCheck';

export default IconMaterialSearchCheck;
