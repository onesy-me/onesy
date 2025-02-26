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
      <path d="m139-292 146-196 126 168h354L565-586 439-418l-18-24 144-192 256 342H139Zm374-28Zm-318 0h181l-91-122-90 122Zm0 0h181-181Z"/>
    </Icon>
  );
});

IconMaterialFilterHdrW100.displayName = 'OnesyIconMaterialFilterHdrW100';

export default IconMaterialFilterHdrW100;
