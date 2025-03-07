import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFunctionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FunctionW100'

      short_name='Function'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M416-266v-28h48l127-146-127-146h-80l-64 323q-12 61-34.5 89T226-146q-32 0-53-18t-21-47q0-19 9.5-30.5T186-253q14 0 24 10t10 24q0 13-8.5 22.5T191-186q5 5 14 8.5t20 3.5q26 0 42-22.5t26-71.5l63-318H236v-28h125l19-102q9-49 30.5-73.5T467-814q32 0 53 18.5t21 47.5q0 19-9.5 30.5T507-706q-14 0-24-9.5T473-739q0-13 8.5-22.5T503-772q-5-6-15.5-10t-21.5-4q-23 0-37.5 19T407-711l-17 97h174v28h-63l109 125 109-125h-63v-28h148v28h-48L629-440l128 146h47v28H656v-28h63L610-419 501-294h63v28H416Z"/>
    </Icon>
  );
});

IconMaterialFunctionW100.displayName = 'OnesyIconMaterialFunctionW100';

export default IconMaterialFunctionW100;
