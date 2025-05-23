import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialConstructionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConstructionW100Filled'

      short_name='Construction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M759-172 536-395l30-30 223 223-30 30Zm-557 0-30-30 279-279-134-133-20 20-34-35v69l-20 20-100-100 20-20h69l-35-34 70-70q12-12 26.5-18t31.5-6q17 0 31.5 6t26.5 18l-58 58 42 42-20 20 134 133 106-106q-11-14-15-28.5t-4-32.5q0-46 32-78t78-32q9 0 17.5 1t16.5 5l-78 78 70 70 78-78q4 8 5 16.5t1 17.5q0 46-32 78t-78 32q-18 0-32.5-4T617-587L202-172Z"/>
    </Icon>
  );
});

IconMaterialConstructionW100Filled.displayName = 'OnesyIconMaterialConstructionW100Filled';

export default IconMaterialConstructionW100Filled;
