import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoMealsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMealsW100Filled'

      short_name='NoMeals'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m694-378-28-28v-20h-20l-72-72v-182q0-42 9-74t22.5-54.5q13.5-22.5 29.5-34t30-11.5q15 0 22 9t7 26v441ZM862-78q-5 5-10 5t-10-5L694-226v106q0 6-4 10t-10 4q-6 0-10-4t-4-10v-134L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78ZM442-630l-28-28v-182q0-6 4-10t10-4q6 0 10 4t4 10v210ZM334-738l-28-28v-74q0-6 4-10t10-4q6 0 10 4t4 10v102ZM226-846l-8-8q3 0 5.5 2.5t2.5 5.5Zm94 740q-6 0-10-4t-4-10v-346q-45-5-76.5-38.5T198-588v-174l28 28v146h80v-66l28 28v38h38l57 57q-14 27-39 44.5T334-466v346q0 6-4 10t-10 4Z"/>
    </Icon>
  );
});

IconMaterialNoMealsW100Filled.displayName = 'OnesyIconMaterialNoMealsW100Filled';

export default IconMaterialNoMealsW100Filled;
