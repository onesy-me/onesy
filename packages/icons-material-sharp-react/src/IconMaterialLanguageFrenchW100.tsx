import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLanguageFrenchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageFrenchW100'

      short_name='LanguageFrench'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-306v-348h228v28H240v132h160v28H240v160h-28Zm308 0v-348h177l51 51v96l-51 51h-33l84 150h-31l-85-150h-84v150h-28Zm28-178h137l35-35v-72l-35-35H548v142Z"/>
    </Icon>
  );
});

IconMaterialLanguageFrenchW100.displayName = 'OnesyIconMaterialLanguageFrenchW100';

export default IconMaterialLanguageFrenchW100;
