import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsScoreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsScoreW100'

      short_name='SportsScore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M350-716h72v-72h-72v72Zm144 0v-72h72v72h-72ZM350-428v-72h72v72h-72Zm288-144v-72h72v72h-72Zm0 144v-72h72v72h-72Zm-144 0v-72h72v72h-72Zm144-288v-72h72v72h-72Zm-216 72v-72h72v72h-72ZM250-188v-600h28v72h72v72h-72v72h72v72h-72v312h-28Zm316-312v-72h72v72h-72Zm-144 0v-72h72v72h-72Zm-72-72v-72h72v72h-72Zm144 0v-72h72v72h-72Zm72-72v-72h72v72h-72Z"/>
    </Icon>
  );
});

IconMaterialSportsScoreW100.displayName = 'OnesyIconMaterialSportsScoreW100';

export default IconMaterialSportsScoreW100;
