import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGeneratingTokens = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GeneratingTokens'

      short_name='GeneratingTokens'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 20q-3.35 0-5.675-2.325Q1 15.35 1 12q0-3.35 2.325-5.675Q5.65 4 9 4q3.35 0 5.675 2.325Q17 8.65 17 12q0 3.35-2.325 5.675Q12.35 20 9 20Zm0-2q2.5 0 4.25-1.75T15 12q0-2.5-1.75-4.25T9 6Q6.5 6 4.75 7.75T3 12q0 2.5 1.75 4.25T9 18Zm-1-2.5h2v-5h2V9H6v1.5h2ZM19 9l-1.25-2.75L15 5l2.75-1.25L19 1l1.25 2.75L23 5l-2.75 1.25Zm0 14-1.25-2.75L15 19l2.75-1.25L19 15l1.25 2.75L23 19l-2.75 1.25ZM9 12Z"/>
    </Icon>
  );
});

IconMaterialGeneratingTokens.displayName = 'OnesyIconMaterialGeneratingTokens';

export default IconMaterialGeneratingTokens;
