import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDialerSipW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DialerSipW100'

      short_name='DialerSip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M759-172q-103 0-207.5-48.5T358.5-358Q270-447 221-552.5T172-759v-29h160l33 152-106 96q29 50 59 90.5t62 72.5q33 35 75 65t97 60l101-106 135 27v159h-29ZM246-566l89-80-25-114H200q0 46 11.5 94.5T246-566Zm332 326q36 19 84.5 29.5T760-200v-109l-96-19-86 88ZM246-566Zm332 326Zm-76-398v-28h70v-34h-70v-88h98v28h-70v32h70v90h-98Zm128 0v-150h28v150h-28Zm58 0v-150h100v88h-72v62h-28Zm28-90h44v-32h-44v32Z"/>
    </Icon>
  );
});

IconMaterialDialerSipW100.displayName = 'OnesyIconMaterialDialerSipW100';

export default IconMaterialDialerSipW100;
