import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimerOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerOffFilled'

      short_name='TimerOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m792-56-96-96q-48 35-103.5 53.5T480-80q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-60 18.5-115.5T192-656L56-792l56-56 736 736-56 56ZM360-840v-80h240v80H360Zm438 566L520-552v-88h-80v8L313-759q38-20 80.5-30.5T480-800q60 0 117.5 20T706-722l56-56 56 56-56 56q38 51 58 108.5T840-440q0 42-10.5 83.5T798-274Z"/>
    </Icon>
  );
});

IconMaterialTimerOffFilled.displayName = 'OnesyIconMaterialTimerOffFilled';

export default IconMaterialTimerOffFilled;
