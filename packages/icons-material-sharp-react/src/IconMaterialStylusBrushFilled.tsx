import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStylusBrushFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylusBrushFilled'

      short_name='StylusBrush'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-320q-100 0-170-69.5T240-562q0-74 44-139t96.5-114q52.5-49 96-77l43.5-28q0 57 20.5 96t77.5 83q59 46 80.5 85.5T720-562q0 103-70 172.5T480-320ZM160-120l40-120h560l40 120H160Z"/>
    </Icon>
  );
});

IconMaterialStylusBrushFilled.displayName = 'OnesyIconMaterialStylusBrushFilled';

export default IconMaterialStylusBrushFilled;
