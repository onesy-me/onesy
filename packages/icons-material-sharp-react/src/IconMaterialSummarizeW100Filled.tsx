import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSummarizeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SummarizeW100Filled'

      short_name='Summarize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M290-610h60v-60h-60v60Zm0 160h60v-60h-60v60Zm0 160h60v-60h-60v60ZM172-172v-616h446l170 170v446H172Zm428-588v160h160L600-760Z"/>
    </Icon>
  );
});

IconMaterialSummarizeW100Filled.displayName = 'OnesyIconMaterialSummarizeW100Filled';

export default IconMaterialSummarizeW100Filled;
