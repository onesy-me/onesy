import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFunctionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FunctionW100Filled'

      short_name='Function'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-146q-32 0-53-18t-21-47q0-19 9.5-30.5T186-253q14 0 24 10t10 24q0 13-8.5 22.5T191-186q5 5 14 8.5t20 3.5q26 0 42-22.5t26-71.5l63-318H250q-6 0-10-4t-4-10q0-6 4-10t10-4h111l19-102q9-49 30.5-73.5T467-814q32 0 53 18.5t21 47.5q0 19-9.5 30.5T507-706q-14 0-24-9.5T473-739q0-13 8.5-22.5T503-772q-5-6-15.5-10t-21.5-4q-23 0-37.5 19T407-711l-17 97h160q6 0 10 4t4 10q0 6-4 10t-10 4h-49l109 125 109-125h-49q-6 0-10-4t-4-10q0-6 4-10t10-4h120q6 0 10 4t4 10q0 6-4 10t-10 4h-34L629-440l128 146h33q6 0 10 4t4 10q0 6-4 10t-10 4H670q-6 0-10-4t-4-10q0-6 4-10t10-4h49L610-419 501-294h49q6 0 10 4t4 10q0 6-4 10t-10 4H430q-6 0-10-4t-4-10q0-6 4-10t10-4h34l127-146-127-146h-80l-64 323q-12 61-34.5 89T226-146Z"/>
    </Icon>
  );
});

IconMaterialFunctionW100Filled.displayName = 'OnesyIconMaterialFunctionW100Filled';

export default IconMaterialFunctionW100Filled;
