import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSetMealW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SetMealW100'

      short_name='SetMeal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-406q-25 0-42.5-17.5T86-466v-308q0-25 17.5-42.5T146-834h668q25 0 42.5 17.5T874-774v308q0 25-17.5 42.5T814-406H146Zm0-400q-14 0-23 9t-9 23v308q0 14 9 23t23 9h668q14 0 23-9t9-23v-308q0-14-9-23t-23-9H146Zm665 514-659 34q-6 0-10.5-3.5T137-271q0-6 4-10.5t10-4.5l659-34q6 0 10.5 3.5t4.5 9.5q0 6-4 10.5t-10 4.5Zm-1 135H150q-6 0-10-4t-4-10q0-6 4-10t10-4h660q6 0 10 4t4 10q0 6-4 10t-10 4ZM433-524q61 0 118.5-19.5T653-606q5 23 23 38.5t41 20.5q8 2 16-.5t8-13.5v-118q0-11-8-13t-16 0q-24 6-41.5 21.5T653-632q-45-42-102-63t-118-21q-66 0-119.5 18.5T213-631q-2 2-4 11 0 1 4 11 47 48 100.5 66.5T433-524ZM114-806v372-372Z"/>
    </Icon>
  );
});

IconMaterialSetMealW100.displayName = 'OnesyIconMaterialSetMealW100';

export default IconMaterialSetMealW100;
