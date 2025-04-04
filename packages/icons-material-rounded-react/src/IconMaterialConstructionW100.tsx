import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialConstructionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConstructionW100'

      short_name='Construction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M744-187 536-395l30-30 208 208q6 6 6 15t-6 15q-6 6-15 6t-15-6Zm-557 0q-6-6-6-15t6-15l264-264-134-133q-8 8-20 8t-20-8l-14-15v73q0 10-9.5 13.5T237-546l-88-88q-7-7-3.5-16.5T159-660h73l-13-13q-9-9-9-21.5t9-21.5l48-48q12-12 26.5-18t31.5-6q12 0 23 3t21 11q5 4 6 10.5t-4 11.5l-46 46 22 22q8 8 8 20t-8 20l134 133 106-106q-11-14-15-28.5t-4-32.5q0-46 32-78t78-32h8.5q3.5 0 8.5 1 5 2 7 7.5t-2 9.5l-55 55q-5 5-5 11t5 11l48 48q5 5 11 5t11-5l55-55q4-4 9.5-2t7.5 7q1 5 1 8.5v8.5q0 46-32 78t-78 32q-18 0-32.5-4T617-587L217-187q-6 6-15 6t-15-6Z"/>
    </Icon>
  );
});

IconMaterialConstructionW100.displayName = 'OnesyIconMaterialConstructionW100';

export default IconMaterialConstructionW100;
