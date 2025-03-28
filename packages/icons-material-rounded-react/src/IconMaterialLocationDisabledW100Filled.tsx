import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationDisabledW100Filled'

      short_name='LocationDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-478q0 6-4 10t-10 4h-38q-4 36-12 67t-23 60q-3 5-8.5 7t-10.5 0q-5-2-6.5-7.5t.5-10.5q14-29 23-64t9-66q0-116-82-198t-198-82q-32 0-65.5 9T352-726q-5 2-11 1t-9-6q-3-5-1.5-10.5t6.5-8.5q30-16 61-24t68-12v-38q0-6 4-10t10-4q6 0 10 4t4 10v38q125 11 204 90t90 204h38q6 0 10 4t4 10ZM466-132v-38q-125-11-204-90t-90-204h-38q-6 0-10-4t-4-10q0-6 4-10t10-4h38q5-54 23-101.5t47-82.5l-96-96q-4-4-4.5-9.5T146-792q5-5 10-5t10 5l627 627q5 5 5 10.5t-5 10.5q-5 4-10.5 4.5T772-144l-94-96q-35 29-82.5 47T494-170v38q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm14-66q48 0 98-19t80-43L262-656q-24 30-43 78.5T200-478q0 116 82 198t198 82Z"/>
    </Icon>
  );
});

IconMaterialLocationDisabledW100Filled.displayName = 'OnesyIconMaterialLocationDisabledW100Filled';

export default IconMaterialLocationDisabledW100Filled;
