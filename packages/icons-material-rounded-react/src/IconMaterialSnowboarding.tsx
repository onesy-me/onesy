import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSnowboarding = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Snowboarding'

      short_name='Snowboarding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M751-60q-9 0-18.5-1T714-64L209-172q-44-9-76.5-35.5T83-272q-2-4-2-18 3-12 13-19t23-5q7 2 12 6.5t8 10.5q12 25 33.5 43t50.5 24l19 4 140-94-32-140q-4-15-1-30.5t11-29.5l100-160h-94l-55 88q-9 14-25 18t-30-5q-14-9-18-25t5-30l67-107q5-9 14-14t20-5h206q27 0 43.5 15t22.5 28l21 48q17 39 50 67t76 38q17 4 28 15.5t11 28.5q0 17-11 28t-27 9q-58-8-105.5-39.5T579-602l-72 115 121 97q6 5 9 11t5 14l38 233 46 9q6 2 12.5 2.5t12.5.5q24 0 43-8t36-22q5-5 26-6 13 2 19.5 13t4.5 22q-1 5-3.5 9t-6.5 8q-25 22-56 33t-63 11Zm-155-90-30-186-114-81 15 108q2 11-3 22t-15 17l-100 67 247 53Zm44-610q-33 0-56.5-23.5T560-840q0-33 23.5-56.5T640-920q33 0 56.5 23.5T720-840q0 33-23.5 56.5T640-760Z"/>
    </Icon>
  );
});

IconMaterialSnowboarding.displayName = 'OnesyIconMaterialSnowboarding';

export default IconMaterialSnowboarding;
