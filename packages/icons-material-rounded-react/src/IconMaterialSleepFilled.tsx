import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSleepFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SleepFilled'

      short_name='Sleep'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M483 976q-84 0-157.5-32t-128-86.5Q143 803 111 729.5T79 572q0-124 68.5-225T331 199q14-5 29-3.5t25 9.5q8 7 12.5 19.5T402 257q2 79 32 150.5T520 535q56 56 128 86t151 32q21 0 32 3.5t18 11.5q8 10 10.5 26t-2.5 29q-46 115-148 184t-226 69Zm187-590-70-32q-12-5-12-18t12-18l70-32 32-70q5-12 18-12t18 12l32 70 70 32q12 5 12 18t-12 18l-70 32-32 70q-5 12-18 12t-18-12l-32-70Z"/>
    </Icon>
  );
});

IconMaterialSleepFilled.displayName = 'OnesyIconMaterialSleepFilled';

export default IconMaterialSleepFilled;
