import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPenSize3W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PenSize3W100'

      short_name='PenSize3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M236-236q-10-10-10-24t10-24l441-440q10-10 23.5-10t23.5 10q10 10 10 24t-10 24L284-236q-10 10-24 10t-24-10Z"/>
    </Icon>
  );
});

IconMaterialPenSize3W100.displayName = 'OnesyIconMaterialPenSize3W100';

export default IconMaterialPenSize3W100;
