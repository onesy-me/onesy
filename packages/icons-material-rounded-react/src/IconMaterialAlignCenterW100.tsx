import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignCenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignCenterW100'

      short_name='AlignCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-466q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h668q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H146Zm190-120q-12.75 0-21.37-8.63Q306-603.25 306-616v-8q0-12.75 8.63-21.38Q323.25-654 336-654h288q12.75 0 21.38 8.62Q654-636.75 654-624v8q0 12.75-8.62 21.37Q636.75-586 624-586H336Zm0 280q-12.75 0-21.37-8.63Q306-323.25 306-336v-8q0-12.75 8.63-21.38Q323.25-374 336-374h288q12.75 0 21.38 8.62Q654-356.75 654-344v8q0 12.75-8.62 21.37Q636.75-306 624-306H336Z"/>
    </Icon>
  );
});

IconMaterialAlignCenterW100.displayName = 'OnesyIconMaterialAlignCenterW100';

export default IconMaterialAlignCenterW100;
