import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStarHalfW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarHalfW100'

      short_name='StarHalf'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-675v312l126 77-33-144 111-96-146-13-58-136Zm0 345-139 84q-5 2-8.5 1.5T325-247q-4-2-6-6.5t0-9.5l37-157-122-106q-4-3-5.5-7.5t.5-8.5q2-4 5-6.5t8-3.5l161-14 63-149q2-5 5.5-7t8.5-2q5 0 8.5 2t5.5 7l63 149 161 14q5 1 8 3.5t5 6.5q2 4 .5 8.5T726-526L604-420l37 157q2 5 0 9.5t-6 6.5q-4 2-7.5 2.5T619-246l-139-84Z"/>
    </Icon>
  );
});

IconMaterialStarHalfW100.displayName = 'OnesyIconMaterialStarHalfW100';

export default IconMaterialStarHalfW100;
