import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCirclesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CirclesW100'

      short_name='Circles'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-158q-58 0-109.5-22t-90-60.5Q202-279 180-330.5T158-440q0-103 66.5-181.5T394-718q9-2 15.5 4t7.55 14.87Q418-691 412-684.5t-14 8.5q-86 16-142 82t-56 154q0 100 70 170t170 70q88 0 155-56t81-143q2-8 8.5-14t14.48-5.06Q708-417 714-410.5t4 15.5q-17 103-95.5 170T440-158Zm240-702q75 0 127.5 52.5T860-680q0 75-52.5 127.5T680-500q-75 0-127.5-52.5T500-680q0-75 52.5-127.5T680-860Zm0 318q57.5 0 97.75-40.25T818-680q0-57.5-40.25-97.75T680-818q-57.5 0-97.75 40.25T542-680q0 57.5 40.25 97.75T680-542Zm0-138ZM440-440Z"/>
    </Icon>
  );
});

IconMaterialCirclesW100.displayName = 'OnesyIconMaterialCirclesW100';

export default IconMaterialCirclesW100;
