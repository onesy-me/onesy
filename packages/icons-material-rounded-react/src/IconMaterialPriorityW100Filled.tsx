import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPriorityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriorityW100Filled'

      short_name='Priority'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-172q-78 0-133-55t-55-133v-240q0-78 55-133t133-55h240q78 0 133 55t55 133v240q0 78-55 133t-133 55H360Zm80-224-78-78q-4-4-9.5-4.5T342-474q-5 5-5 10t5 10l77 77q9 9 21 9t21-9l173-173q4-4 4.5-9.5T634-570q-5-5-10-5t-10 5L440-396Z"/>
    </Icon>
  );
});

IconMaterialPriorityW100Filled.displayName = 'OnesyIconMaterialPriorityW100Filled';

export default IconMaterialPriorityW100Filled;
