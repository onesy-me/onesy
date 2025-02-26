import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSummarize = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Summarize'

      short_name='Summarize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-600h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80ZM120-120v-720h520l200 200v520H120Zm80-80h560v-400H600v-160H200v560Zm0-560v160-160 560-560Z"/>
    </Icon>
  );
});

IconMaterialSummarize.displayName = 'OnesyIconMaterialSummarize';

export default IconMaterialSummarize;
