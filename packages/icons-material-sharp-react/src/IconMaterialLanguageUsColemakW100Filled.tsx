import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLanguageUsColemakW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageUsColemakW100Filled'

      short_name='LanguageUsColemak'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M532-334h188v-292H532v292Zm-320 28v-348h212v28H240v292h184v28H212Zm292 0v-348h244v348H504Z"/>
    </Icon>
  );
});

IconMaterialLanguageUsColemakW100Filled.displayName = 'OnesyIconMaterialLanguageUsColemakW100Filled';

export default IconMaterialLanguageUsColemakW100Filled;
