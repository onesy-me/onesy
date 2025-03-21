import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDecimalIncreaseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DecimalIncreaseW100Filled'

      short_name='DecimalIncrease'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m690-143-20-19 89-90H479v-28h280l-89-90 20-19 123 123-123 123ZM197-449v-52h52v52h-52Zm212.89 0q-41.89 0-71.39-29.58T309-550v-160q0-41.84 29.61-71.42t71.5-29.58q41.89 0 71.39 29.58T511-710v160q0 41.84-29.61 71.42T409.89-449Zm302 0q-41.89 0-71.39-29.58T611-550v-160q0-41.84 29.61-71.42t71.5-29.58q41.89 0 71.39 29.58T813-710v160q0 41.84-29.61 71.42T711.89-449ZM410-477q30.42 0 51.71-21.29T483-550v-160q0-30.42-21.29-51.71T410-783q-30.42 0-51.71 21.29T337-710v160q0 30.42 21.29 51.71T410-477Zm302 0q30.42 0 51.71-21.29T785-550v-160q0-30.42-21.29-51.71T712-783q-30.42 0-51.71 21.29T639-710v160q0 30.42 21.29 51.71T712-477Z"/>
    </Icon>
  );
});

IconMaterialDecimalIncreaseW100Filled.displayName = 'OnesyIconMaterialDecimalIncreaseW100Filled';

export default IconMaterialDecimalIncreaseW100Filled;
