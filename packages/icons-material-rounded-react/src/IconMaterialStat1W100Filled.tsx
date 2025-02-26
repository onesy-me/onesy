import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStat1W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stat1W100Filled'

      short_name='Stat1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-564 306-390q-4 4-9.5 4.5T286-390q-5-5-5-10t5-10l173-173q5-5 10-7t11-2q6 0 11 2t10 7l173 173q4 4 4.5 9.5T674-390q-5 5-10 5t-10-5L480-564Z"/>
    </Icon>
  );
});

IconMaterialStat1W100Filled.displayName = 'OnesyIconMaterialStat1W100Filled';

export default IconMaterialStat1W100Filled;
