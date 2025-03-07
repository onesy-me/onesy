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
      <path d="m357-572 79-79q9-9 21-9t21 9q9 9 9 21t-9 21l-92 93q-12 12-28 12t-28-12l-48-47q-9-8-9-20.5t9-21.5q9-9 21-9t21 9l33 33Zm23 252q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l224 224q11 11 11 28t-11 28q-11 11-28 11t-28-11L532-372q-30 24-69 38t-83 14Zm0-80q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
    </Icon>
  );
});

IconMaterialSearchCheck.displayName = 'OnesyIconMaterialSearchCheck';

export default IconMaterialSearchCheck;
