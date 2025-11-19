import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMealLunchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MealLunchW100'

      short_name='MealLunch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M203-160h255l31-120H172l31 120Zm-45-306h-28v-65h28v65Zm224-92-47-46 20-20 46 46-19 20Zm-238-93h-14v-28h14q57 0 96-39t39-96v-14h28v14q0 67.65-47.68 115.32Q211.64-651 144-651Zm350-149h-65v-28h65v28ZM92-132v-28h82l-38-148h389l-38 148h282l29-343H536l8 95h-28l-11-123h323l-31 371h71v28H92Zm38-696Zm537 668Zm-336 0Z"/>
    </Icon>
  );
});

IconMaterialMealLunchW100.displayName = 'OnesyIconMaterialMealLunchW100';

export default IconMaterialMealLunchW100;
