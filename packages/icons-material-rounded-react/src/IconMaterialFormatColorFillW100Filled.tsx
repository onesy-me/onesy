import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatColorFillW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorFillW100Filled'

      short_name='FormatColorFill'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m299-853 309 309q18 18 18 43t-18 43L462-310q-17 17-42 17t-42-17L232-458q-18-18-18-43t18-43l169-167-123-123q-4-4-4-9t4-10q4-5 10-5t11 5Zm122 162L250-522q-5 5-6.5 10.5T242-500h356q0-6-1.5-11.5T590-522L421-691Zm317 447q-23 0-38.5-15.5T684-298q0-17 8.5-32.5T710-360q7-10 14-19t14-19q7 10 14 19t14 19q9 14 17.5 29.5T792-298q0 23-15.5 38.5T738-244ZM108 0Q97 0 88.5-8T80-28q0-11 8.5-19.5T108-56h744q11 0 19.5 8t8.5 20q0 11-8.5 19.5T852 0H108Z"/>
    </Icon>
  );
});

IconMaterialFormatColorFillW100Filled.displayName = 'OnesyIconMaterialFormatColorFillW100Filled';

export default IconMaterialFormatColorFillW100Filled;
