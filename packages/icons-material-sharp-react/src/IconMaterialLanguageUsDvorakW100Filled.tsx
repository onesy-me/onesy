import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLanguageUsDvorakW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageUsDvorakW100Filled'

      short_name='LanguageUsDvorak'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-334h137l35-35v-222l-35-35H240v292Zm-28 28v-348h177l51 51v246l-51 51H212Zm421 0L514-654h28l109 314 109-314h28L669-306h-36Z"/>
    </Icon>
  );
});

IconMaterialLanguageUsDvorakW100Filled.displayName = 'OnesyIconMaterialLanguageUsDvorakW100Filled';

export default IconMaterialLanguageUsDvorakW100Filled;
