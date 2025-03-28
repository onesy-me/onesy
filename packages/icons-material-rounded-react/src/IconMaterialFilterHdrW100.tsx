import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterHdrW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterHdrW100'

      short_name='FilterHdr'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M199-292q-19 0-27-16.5t3-31.5l86-116q5-6 11-9t13-3q7 0 13 3t11 9l102 136h354L565-586 450-433q-5 6-10 6t-10-3q-5-3-6.5-9t3.5-12l114-151q5-6 11-9t13-3q7 0 13 3t11 9l196 262q11 15 3 31.5T761-292H199Zm240-28h326-359 69.5H439Zm-244 0h181l-91-122-90 122Zm0 0h181-181Z"/>
    </Icon>
  );
});

IconMaterialFilterHdrW100.displayName = 'OnesyIconMaterialFilterHdrW100';

export default IconMaterialFilterHdrW100;
