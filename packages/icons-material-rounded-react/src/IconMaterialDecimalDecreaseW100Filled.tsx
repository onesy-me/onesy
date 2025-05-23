import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDecimalDecreaseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DecimalDecreaseW100Filled'

      short_name='DecimalDecrease'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m523-252 79 80q4 4 4.5 9.79.5 5.79-4.8 10-4.7 4.21-9.83 4.21-5.14 0-8.87-4l-92-93q-9-9-9-21t9-21l92-92q4-4 9.5-4.5t10 3.5q4.5 4 4.33 9.87-.16 5.86-3.83 10.13l-80 80h266q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H523ZM223-449q-11.05 0-18.52-7.48Q197-463.95 197-475t7.48-18.52Q211.95-501 223-501t18.52 7.48Q249-486.05 249-475t-7.48 18.52Q234.05-449 223-449Zm186.89 0q-41.89 0-71.39-29.58T309-550v-160q0-41.84 29.61-71.42t71.5-29.58q41.89 0 71.39 29.58T511-710v160q0 41.84-29.61 71.42T409.89-449Zm.11-28q30.42 0 51.71-21.29T483-550v-160q0-30.42-21.29-51.71T410-783q-30.42 0-51.71 21.29T337-710v160q0 30.42 21.29 51.71T410-477Z"/>
    </Icon>
  );
});

IconMaterialDecimalDecreaseW100Filled.displayName = 'OnesyIconMaterialDecimalDecreaseW100Filled';

export default IconMaterialDecimalDecreaseW100Filled;
