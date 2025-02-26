import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEngineeringFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EngineeringFilled'

      short_name='Engineering'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M42-120v-112q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v112H42Zm320-320q-66 0-113-47t-47-113h-30v-40h30q0-45 22-81t58-57v58h40v-74q9-3 19-4.5t21-1.5q11 0 21 1.5t19 4.5v74h40v-58q36 21 58 57t22 81h30v40h-30q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T442-600H282q0 33 23.5 56.5T362-520Zm300 160-6-30q-6-2-11.5-4.5T634-402l-28 10-20-36 22-20v-24l-22-20 20-36 28 10q4-4 10-7t12-5l6-30h40l6 30q6 2 12 5t10 7l28-10 20 36-22 20v24l22 20-20 36-28-10q-5 5-10.5 7.5T708-390l-6 30h-40Zm20-70q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm72-130-8-42q-9-3-16.5-7.5T716-620l-42 14-28-48 34-30q-2-5-2-8v-16q0-3 2-8l-34-30 28-48 42 14q6-6 13.5-10.5T746-798l8-42h56l8 42q9 3 16.5 7.5T848-780l42-14 28 48-34 30q2 5 2 8v16q0 3-2 8l34 30-28 48-42-14q-6 6-13.5 10.5T818-602l-8 42h-56Zm28-90q21 0 35.5-14.5T832-700q0-21-14.5-35.5T782-750q-21 0-35.5 14.5T732-700q0 21 14.5 35.5T782-650Z"/>
    </Icon>
  );
});

IconMaterialEngineeringFilled.displayName = 'OnesyIconMaterialEngineeringFilled';

export default IconMaterialEngineeringFilled;
