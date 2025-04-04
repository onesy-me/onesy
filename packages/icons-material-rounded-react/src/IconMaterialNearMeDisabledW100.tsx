import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNearMeDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeDisabledW100'

      short_name='NearMeDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m508-257-72-181-182-74q-10-4-14.5-12t-4.5-16q0-8 4.5-16t14.5-12l154-58-215-215q-4-4-4.5-9.5T193-861q5-5 10-5t10 5l648 648q4 4 4.5 9.5T861-193q-5 5-10 5t-10-5L623-411l-59 154q-4 10-12 14.5t-16 4.5q-8 0-16-4.5T508-257Zm219-472q6 6 8.5 14.5T734-697l-60 157q-3 7-10.5 8t-12.5-4q-3-3-4.5-7t.5-8l63-161-163 62q-4 2-7.5 1t-6.5-4q-5-5-4-12t8-10l158-61q9-4 17.5-1.5T727-729ZM536-264l65-169-172-172-169 65 196 80 80 196Zm56-330Zm-77 75Z"/>
    </Icon>
  );
});

IconMaterialNearMeDisabledW100.displayName = 'OnesyIconMaterialNearMeDisabledW100';

export default IconMaterialNearMeDisabledW100;
