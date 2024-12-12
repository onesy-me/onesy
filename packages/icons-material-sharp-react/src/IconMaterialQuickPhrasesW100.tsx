import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuickPhrasesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickPhrasesW100'

      short_name='QuickPhrases'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372-184v-148h-9q-94 0-162.5-59T132-540q0-87 60.5-147T340-747h98l-90-90 20-20 124 124-124 124-20-20 90-90h-98q-75 0-127.5 52T160-540q0 78 61 129t142 51h37v108l107-108h113q75 0 128-52.5T801-540q0-75-53-127.5T620-720h-10v-28h10q87 0 148 60.5T829-540q0 87-61 147.5T620-332H520L372-184Z"/>
    </Icon>
  );
});

IconMaterialQuickPhrasesW100.displayName = 'OnesyIconMaterialQuickPhrasesW100';

export default IconMaterialQuickPhrasesW100;
