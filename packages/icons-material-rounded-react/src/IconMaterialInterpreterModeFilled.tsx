import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInterpreterModeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InterpreterModeFilled'

      short_name='InterpreterMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M820-300q-25 0-42.5-17.5T760-360v-100q0-25 17.5-42.5T820-520q25 0 42.5 17.5T880-460v100q0 25-17.5 42.5T820-300ZM600-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM360-160q-33 0-56.5-23.5T280-240v-31q0-34 17-63t47-44q51-26 115.5-44T600-440h4q15 0 23 13t3 28q-9 30-8.5 60t9.5 59q5 18 13.5 34t20.5 31q14 17 7 36t-26 19H360Zm460 0q-8 0-14-6t-6-14v-42q-47-7-80-39.5T681-341q-1-8 5-13.5t14-5.5q8 0 13.5 4t7.5 12q6 36 34 60t65 24q36 0 64-23t34-59q2-8 8-13t14-5q8 0 14 5.5t5 13.5q-6 47-39 79.5T840-222v42q0 8-6 14t-14 6ZM200-640q0-35 13.5-65.5T253-759q26-23 58-33.5t67-6.5q13 2 18 14t-3 24q-17 26-25 57t-8 64q0 32 8 62.5t25 58.5q7 12 2.5 24T378-481q-35 4-67-6t-58-33q-26-23-39.5-54T200-640ZM40-240v-31q0-34 17-63t47-44q24-13 51-23.5t58-18.5q14-4 23 9.5t-2 27.5q-17 25-25.5 53t-8.5 59v31q0 11 1.5 22t4.5 22q4 14-3.5 25T182-160h-62q-33 0-56.5-23.5T40-240Z"/>
    </Icon>
  );
});

IconMaterialInterpreterModeFilled.displayName = 'OnesyIconMaterialInterpreterModeFilled';

export default IconMaterialInterpreterModeFilled;
