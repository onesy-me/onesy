import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNutritionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NutritionW100Filled'

      short_name='Nutrition'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-172q-95 0-161.5-66.5T252-400q0-79 48-140.5T425-621q-27-5-48.5-20T341-679q-14-23-21.5-49.5T312-784q32 0 61 10.5t52 30.5q23 20 37.5 46t16.5 58q12-29 29-55t40-49q4-4 10-4t10 4q4 4 4 10t-4 10q-21 21-37 45t-27 51q88 9 146 74t58 153q0 95-66.5 161.5T480-172Z"/>
    </Icon>
  );
});

IconMaterialNutritionW100Filled.displayName = 'OnesyIconMaterialNutritionW100Filled';

export default IconMaterialNutritionW100Filled;
