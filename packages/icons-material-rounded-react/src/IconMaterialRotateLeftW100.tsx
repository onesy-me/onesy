import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRotateLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RotateLeftW100'

      short_name='RotateLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M188-478q-7 0-11-4.5t-2-11.5q6-34 18.5-63.5T224-613q4-5 10.5-5.5T246-614q4 4 4 8.5t-3 8.5q-17 25-28 52t-17 56q-1 5-5 8t-9 3Zm250 329q0 8-5 12t-12 2q-32-7-62-19.5T303-185q-5-4-5.5-10t4.5-11q4-4 8.5-4t8.5 3q25 17 52 27.5t55 15.5q5 1 8.5 5.5t3.5 9.5ZM246-262q-5 5-11.5 4.5T224-263q-19-27-31-57t-18-62q-2-7 2-11.5t11-4.5q5 0 9 3t5 8q6 29 17 56t28 52q3 4 2.5 9t-3.5 8Zm288 127q-7 2-11.5-2t-4.5-11q0-5 3-9t8-5q100-20 164.5-97.5T758-438q0-117-81.5-198.5T478-718h-38l80 80q5 5 5 10t-5 10q-5 5-10 5t-10-5l-93-93q-5-5-7-10t-2-11q0-6 2-11t7-10l93-93q5-5 10-5t10 5q5 5 5 10t-5 10l-80 80h38q128 0 218 90t90 218q0 113-71.5 198T534-135Z"/>
    </Icon>
  );
});

IconMaterialRotateLeftW100.displayName = 'OnesyIconMaterialRotateLeftW100';

export default IconMaterialRotateLeftW100;
