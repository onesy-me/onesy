import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarMealW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarMealW100'

      short_name='CalendarMeal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h140v-92h32v92h276v-92h28v92h140v616H172Zm588-28v-560H200v560h560Zm-364-96h28v-159q23-5 39.5-22t16.5-40v-147h-28v147h-28v-147h-28v147h-28v-147h-28v147q0 23 16.5 40t39.5 22v159Zm196 0h28v-367q-38 5-63 35t-25 68v104h60v160Zm-392 96v-560 560Z"/>
    </Icon>
  );
});

IconMaterialCalendarMealW100.displayName = 'OnesyIconMaterialCalendarMealW100';

export default IconMaterialCalendarMealW100;
