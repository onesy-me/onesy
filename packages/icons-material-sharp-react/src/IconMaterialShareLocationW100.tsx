import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShareLocationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShareLocationW100'

      short_name='ShareLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-134v-28q46-7 85.5-23t70.5-41l19 20q-38 30-81 47t-94 25Zm234-130-20-20q26-33 42-72.5t22-83.5h28q-5 47-23.5 91.5T754-264Zm44-256q-6-45-22-84.5T734-676l21-19q33 46 48 82t23 93h-28ZM440-134q-131-17-218.5-115T134-480q0-133 87-231.5T440-826v28q-120 17-199 107t-79 211q0 121 79 210.5T440-162v28Zm238-598q-36-27-75.5-44T522-798v-28q48 7 90.5 24.5T695-754l-17 22ZM480-331q-43-38-81.5-80T360-510q0-51 34.5-87t85.5-36q51 0 85.5 36t34.5 87q0 57-38.5 99T480-331Zm0-150q14 0 23-9t9-23q0-14-9-23t-23-9q-14 0-23 9t-9 23q0 14 9 23t23 9Z"/>
    </Icon>
  );
});

IconMaterialShareLocationW100.displayName = 'OnesyIconMaterialShareLocationW100';

export default IconMaterialShareLocationW100;
