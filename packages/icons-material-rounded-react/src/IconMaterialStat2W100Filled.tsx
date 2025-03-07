import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStat2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stat2W100Filled'

      short_name='Stat2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-444 306-270q-4 4-9.5 4.5T286-270q-5-5-5-10t5-10l173-173q9-9 21-9t21 9l173 173q4 4 4.5 9.5T674-270q-5 5-10 5t-10-5L480-444Zm0-240L306-510q-4 4-9.5 4.5T286-510q-5-5-5-10t5-10l173-173q9-9 21-9t21 9l173 173q4 4 4.5 9.5T674-510q-5 5-10 5t-10-5L480-684Z"/>
    </Icon>
  );
});

IconMaterialStat2W100Filled.displayName = 'OnesyIconMaterialStat2W100Filled';

export default IconMaterialStat2W100Filled;
