import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeartCheckFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartCheckFilled'

      short_name='HeartCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M887-539q11 12 11 28.5T887-482L745-341q-11 12-28 12t-28-12l-57-56q-12-12-12-28.5t12-28.5q12-11 28.5-11t28.5 11l28 28 113-113q12-11 28.5-11t28.5 11ZM413-143l-100-91q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 21.5t81 61.5q34-40 81-61.5t99-21.5q85 0 142.5 51.5T834-668q-20-8-42-10t-45-2q-85 0-156 68.5T520-440q0 48 21 97.5t59 80.5q-19 17-49.5 43.5T498-172l-32 29q-11 10-26.5 10T413-143Z"/>
    </Icon>
  );
});

IconMaterialHeartCheckFilled.displayName = 'OnesyIconMaterialHeartCheckFilled';

export default IconMaterialHeartCheckFilled;
