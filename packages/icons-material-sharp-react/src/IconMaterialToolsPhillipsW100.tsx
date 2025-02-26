import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToolsPhillipsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsPhillipsW100'

      short_name='ToolsPhillips'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-172v-28h296v28H332Zm0-68v-331l124-165h48l124 165v331H332Zm28-28h240v-124L480-512 360-392v124Zm0-163 106-106v-166L360-561v130Zm240 0v-130L494-703v166l106 106Zm0 163H360h240Z"/>
    </Icon>
  );
});

IconMaterialToolsPhillipsW100.displayName = 'OnesyIconMaterialToolsPhillipsW100';

export default IconMaterialToolsPhillipsW100;
