import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalActivityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalActivityFilled'

      short_name='LocalActivity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-404 60 46q11 9 24 .5t8-22.5l-24-76 67-52q11-9 6-22.5T602-544h-78l-25-77q-5-14-19-14t-19 14l-25 77h-79q-14 0-18.5 13.5T345-508l65 52-24 77q-5 14 7 22.5t24-.5l63-47ZM160-160q-33 0-56.5-23.5T80-240v-135q0-11 7-19t18-10q24-8 39.5-29t15.5-47q0-26-15.5-47T105-556q-11-2-18-10t-7-19v-135q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v135q0 11-7 19t-18 10q-24 8-39.5 29T800-480q0 26 15.5 47t39.5 29q11 2 18 10t7 19v135q0 33-23.5 56.5T800-160H160Z"/>
    </Icon>
  );
});

IconMaterialLocalActivityFilled.displayName = 'OnesyIconMaterialLocalActivityFilled';

export default IconMaterialLocalActivityFilled;
