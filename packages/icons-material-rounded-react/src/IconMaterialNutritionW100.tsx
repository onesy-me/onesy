import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNutritionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NutritionW100'

      short_name='Nutrition'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-172q-95 0-161.5-66.5T252-400q0-79 48-140.5T425-621q-20-4-39.5-12.5T352-656q-25-25-32.5-59t-7.5-69q33 0 65.5 7t57.5 30q23 20 32.5 48.5T479-639q12-29 29-55t40-49q4-4 10-4t10 4q4 4 4 10t-4 10q-21 21-37 45t-27 51q88 9 146 74t58 153q0 95-66.5 161.5T480-172Zm0-28q83 0 141.5-58.5T680-400q0-83-58.5-141.5T480-600q-83 0-141.5 58.5T280-400q0 83 58.5 141.5T480-200Zm0-200Z"/>
    </Icon>
  );
});

IconMaterialNutritionW100.displayName = 'OnesyIconMaterialNutritionW100';

export default IconMaterialNutritionW100;
