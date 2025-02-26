import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpellcheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpellcheckW100'

      short_name='Spellcheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M564-116 430-250l20-20 114 114 228-228 20 20-248 248ZM160-320l188-520h30l186 520h-32l-54-158H246l-56 158h-30Zm96-182h214L362-800h-2L256-502Z"/>
    </Icon>
  );
});

IconMaterialSpellcheckW100.displayName = 'OnesyIconMaterialSpellcheckW100';

export default IconMaterialSpellcheckW100;
