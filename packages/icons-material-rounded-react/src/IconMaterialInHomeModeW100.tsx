import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInHomeModeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InHomeModeW100'

      short_name='InHomeMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-514ZM272-212q-24.75 0-42.37-17.63Q212-247.25 212-272v-324l-92 68q-5 3-10 2.5t-9-5.69Q97-536 97.5-541q.5-5 5.5-9l341-252q8-6 17.07-8.5t18.5-2.5q9.43 0 18.93 2.5T516-802l342 252q5 4 5.5 9t-3.5 10q-4 5-9 5.5t-10-2.5L499-779q-8-6-19-6t-19 6L240-616v344q0 14 9 23t23 9h57q6.1 0 10.05 4.04 3.95 4.03 3.95 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-57Zm309.87 67q-5.87 0-10.87-1.5-5-1.5-10-6.5L459-255q-4-4.09-4-9.55 0-5.45 4-10.45 4-5 10-4.5t10 4.5l103 103 217-216q4-4 9.5-3.84 5.5.16 9.5 4t4 9.66q0 5.82-4 10.18L603-153q-5 5-10.13 6.5-5.14 1.5-11 1.5Z"/>
    </Icon>
  );
});

IconMaterialInHomeModeW100.displayName = 'OnesyIconMaterialInHomeModeW100';

export default IconMaterialInHomeModeW100;
