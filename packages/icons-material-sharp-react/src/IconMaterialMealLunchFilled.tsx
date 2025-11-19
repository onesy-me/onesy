import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMealLunchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MealLunchFilled'

      short_name='MealLunch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-440v-120h80v120H80Zm295-89-85-85 56-56 85 85-56 56ZM80-640v-240h240v40q0 83-58.5 141.5T120-640H80Zm320-160v-80h120v80H400ZM40-80v-80h80L80-320h480l-40 160h83l60-240H493l-13-160h400l-33 400h73v80H40Z"/>
    </Icon>
  );
});

IconMaterialMealLunchFilled.displayName = 'OnesyIconMaterialMealLunchFilled';

export default IconMaterialMealLunchFilled;
