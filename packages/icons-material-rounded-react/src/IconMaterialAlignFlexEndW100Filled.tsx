import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignFlexEndW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignFlexEndW100Filled'

      short_name='AlignFlexEnd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-132q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h668q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H146Zm330-160q-12.75 0-21.37-8.63Q446-309.25 446-322v-448q0-12.75 8.63-21.38Q463.25-800 476-800h8q12.75 0 21.38 8.62Q514-782.75 514-770v448q0 12.75-8.62 21.37Q496.75-292 484-292h-8Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexEndW100Filled.displayName = 'OnesyIconMaterialAlignFlexEndW100Filled';

export default IconMaterialAlignFlexEndW100Filled;
