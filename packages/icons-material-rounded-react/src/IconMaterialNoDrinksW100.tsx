import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoDrinksW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoDrinksW100'

      short_name='NoDrinks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m554-518-19-19 102-115H420l-28-28h270l72-80H312l-28-28h444q14 0 22 9.5t8 20.5q0 5-2 10t-6 10L554-518Zm-77-77ZM306-146q-6 0-10-4t-4-10q0-6 4-10t10-4h160v-280L136-784q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5L494-426v252h160q6 0 10 4t4 10q0 6-4 10t-10 4H306Z"/>
    </Icon>
  );
});

IconMaterialNoDrinksW100.displayName = 'OnesyIconMaterialNoDrinksW100';

export default IconMaterialNoDrinksW100;
