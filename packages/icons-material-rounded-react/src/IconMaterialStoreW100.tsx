import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStoreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StoreW100'

      short_name='Store'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M196-774h568q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H196q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4Zm20 588q-12.75 0-21.37-8.63Q186-203.25 186-216v-210h-21q-14 0-23.5-11.5T136-463l40-168q2.31-10.06 10.77-16.53Q195.23-654 206-654h548q10.77 0 19.23 6.47T784-631l40 168q4 14-5.5 25.5T795-426h-21v226q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-226H534v210q0 12.75-8.62 21.37Q516.75-186 504-186H216Zm-2-28h292v-212H214v212Zm-52-240h636-636Zm0 0h636l-41-172H203l-41 172Z"/>
    </Icon>
  );
});

IconMaterialStoreW100.displayName = 'OnesyIconMaterialStoreW100';

export default IconMaterialStoreW100;
