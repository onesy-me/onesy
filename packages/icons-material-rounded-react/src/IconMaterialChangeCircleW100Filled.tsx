import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChangeCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChangeCircleW100Filled'

      short_name='ChangeCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M522-325q-42 0-82.5-8T370-370q-22-22-34-50.5T324-480q0-14 2-26.5t7-25.5q2-6-.5-11.5T325-551q-5-2-10.5.5T307-542q-5 15-8 30.5t-3 31.5q0 37 14 70.5t40 59.5q32 33 77 43t91 10l-45 45q-4 4-4.5 9.5T473-232q5 5 10 5t10-5l60-60q9-9 9-21t-9-21l-60-60q-4-4-9.5-4.5T473-394q-5 5-5 10t5 10l49 49Zm-83-310q42 0 82.5 8t69.5 37q22 22 34 50.5t12 59.5q0 14-2 26.5t-7 25.5q-2 6 .5 11.5t7.5 7.5q5 2 10.5 0t7.5-8q5-15 8-31t3-32q0-37-14-70.5T611-610q-32-33-77-43t-91-10l45-45q4-4 4.5-9.5T488-728q-5-5-10-5t-10 5l-60 60q-9 9-9 21t9 21l60 60q4 4 9.5 4.5T488-566q5-5 5-10t-5-10l-49-49Zm41 503q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-72 27.5-135.5T234-726q47-47 110.5-74.5T480-828q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480q0 72-27.5 135.5T726-234q-47 47-110.5 74.5T480-132Z"/>
    </Icon>
  );
});

IconMaterialChangeCircleW100Filled.displayName = 'OnesyIconMaterialChangeCircleW100Filled';

export default IconMaterialChangeCircleW100Filled;
