import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrandAwarenessW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrandAwarenessW100'

      short_name='BrandAwareness'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M728-466h-92q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h92q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4ZM577-297q4-5 9.5-6t10.5 3l73 55q5 4 6 9.5t-3 10.5q-4 5-9.5 6t-10.5-3l-73-55q-5-4-6-9.5t3-10.5Zm89-422-73 55q-5 4-10.5 3t-9.5-6q-4-5-3-10.5t6-9.5l73-55q5-4 10.5-3t9.5 6q4 5 3 10.5t-6 9.5ZM308-412H208q-12.75 0-21.37-8.63Q178-429.25 178-442v-76q0-12.75 8.63-21.38Q195.25-548 208-548h100l100-100q7-7 16.5-3.28T434-638v316q0 9.56-9.5 13.28Q415-305 408-312L308-412Zm98-194-86 86H206v80h114l86 86v-252ZM306-480Z"/>
    </Icon>
  );
});

IconMaterialBrandAwarenessW100.displayName = 'OnesyIconMaterialBrandAwarenessW100';

export default IconMaterialBrandAwarenessW100;
