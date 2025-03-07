import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyOffW100'

      short_name='KeyOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M784-136 508-412h-52q-20 54-68 87t-108 33q-78 0-133-55T92-480q0-71 46-124t116-62L136-784q-5-5-5-10t5-10q5-4 10-4.5t10 4.5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5Zm101-344q0 6-2 11t-7 10l-72 71q-5 5-9.5 7t-9.5 2q-8 0-11.5-1.5T765-385l-45-34-38 28-20-20 59-42 63 47 74-74-40-40H553l-28-28h292q6 0 11 2t10 7l38 38q5 5 7 10t2 11ZM280-320q51 0 95-31.5t59-88.5h46l-53-53-47-47-47-47-53-53q-73 0-116.5 50.5T120-480q0 66 47 113t113 47Zm0-120q-17 0-28.5-11.5T240-480q0-17 11.5-28.5T280-520q17 0 28.5 11.5T320-480q0 17-11.5 28.5T280-440Z"/>
    </Icon>
  );
});

IconMaterialKeyOffW100.displayName = 'OnesyIconMaterialKeyOffW100';

export default IconMaterialKeyOffW100;
