import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalDistributeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalDistributeW100'

      short_name='VerticalDistribute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-132q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h668q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H146Zm194-314q-14.17 0-24.08-9.88-9.92-9.88-9.92-24t9.92-24.12q9.91-10 24.08-10h280q14.17 0 24.08 9.88 9.92 9.88 9.92 24T644.08-456q-9.91 10-24.08 10H340ZM146-800q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h668q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H146Z"/>
    </Icon>
  );
});

IconMaterialVerticalDistributeW100.displayName = 'OnesyIconMaterialVerticalDistributeW100';

export default IconMaterialVerticalDistributeW100;
