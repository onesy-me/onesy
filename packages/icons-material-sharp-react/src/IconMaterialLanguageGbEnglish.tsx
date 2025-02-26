import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLanguageGbEnglish = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageGbEnglish'

      short_name='LanguageGbEnglish'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-360h160v-80H600v80Zm0-160h160v-80H600v80ZM120-280v-400h320v80H200v240h160v-80h-80v-80h160v240H120Zm400 0v-400h280l40 40v120l-40 40 40 40v120l-40 40H520Z"/>
    </Icon>
  );
});

IconMaterialLanguageGbEnglish.displayName = 'OnesyIconMaterialLanguageGbEnglish';

export default IconMaterialLanguageGbEnglish;
