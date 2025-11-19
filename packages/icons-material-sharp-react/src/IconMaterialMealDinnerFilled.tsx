import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMealDinnerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MealDinnerFilled'

      short_name='MealDinner'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M322-400q-100 0-171-70T80-640q0-100 71-170t172-70h16q-22 25-34 56t-12 64q0 75 52.5 127.5T473-580q23 0 45-5.5t42-16.5q-14 88-81 145t-157 57Zm398-120h80v-120h-80v120ZM40-80v-80h80L80-320h480l-40 160h200v-127q-36-13-58-44t-22-69v-320h240v320q0 38-22 69t-58 44v127h120v80H40Z"/>
    </Icon>
  );
});

IconMaterialMealDinnerFilled.displayName = 'OnesyIconMaterialMealDinnerFilled';

export default IconMaterialMealDinnerFilled;
