import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextRotateVerticalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotateVerticalW100'

      short_name='TextRotateVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m546-452-39 105q-2 4-5 6.5t-8 2.5q-8 0-11.5-6t-1.5-13l144-377q2-4 5-6t7-2h10q4 0 7 2.5t5 6.5l140 376q2 7-1.5 13t-11.5 6q-5 0-8-2t-5-7l-39-105H546Zm10-26h168l-80-220h-4l-84 220ZM228-254v-546q0-6 4-10t10-4q6 0 10 4t4 10v546l60-57q5-4 10-4t10 5q5 5 5 10t-5 10l-73 73q-9 9-21 9t-21-9l-73-73q-4-4-4.5-9.5T148-310q4-4 9.5-4.5T168-311l60 57Z"/>
    </Icon>
  );
});

IconMaterialTextRotateVerticalW100.displayName = 'OnesyIconMaterialTextRotateVerticalW100';

export default IconMaterialTextRotateVerticalW100;
