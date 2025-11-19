import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHandMealW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandMealW100Filled'

      short_name='HandMeal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-467v-28h76q11-124 95-206t203-87v-40h28v40q118 5 202 87t95 206h77v28H92Zm216 296v-268h334q10 0 17 5t10 13q3 8 2 16t-8 14l-55 48H433v31h185l63-54q16-14 35-21t39-7q20 1 38 8.5t32 22.5L595-171H308Zm-176 39v-308h148v308H132Z"/>
    </Icon>
  );
});

IconMaterialHandMealW100Filled.displayName = 'OnesyIconMaterialHandMealW100Filled';

export default IconMaterialHandMealW100Filled;
