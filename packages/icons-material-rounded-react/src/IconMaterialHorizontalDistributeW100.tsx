import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHorizontalDistributeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalDistributeW100'

      short_name='HorizontalDistribute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M145.96-132q-5.96 0-9.96-4.02-4-4.03-4-9.98v-668q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v668q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm334.16-174Q466-306 456-315.92q-10-9.91-10-24.08v-280q0-14.17 9.88-24.08 9.88-9.92 24-9.92t24.12 9.92q10 9.91 10 24.08v280q0 14.17-9.88 24.08-9.88 9.92-24 9.92Zm333.84 174q-5.96 0-9.96-4.02-4-4.03-4-9.98v-668q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v668q0 5.95-4.04 9.98-4.03 4.02-10 4.02Z"/>
    </Icon>
  );
});

IconMaterialHorizontalDistributeW100.displayName = 'OnesyIconMaterialHorizontalDistributeW100';

export default IconMaterialHorizontalDistributeW100;
