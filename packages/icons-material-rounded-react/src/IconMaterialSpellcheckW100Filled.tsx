import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpellcheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpellcheckW100Filled'

      short_name='Spellcheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m564-156 218-218q4-4 9.5-4.5T802-374q5 5 5 10t-5 10L606-158q-9 9-20 13t-22 4q-11 0-22-4t-20-13l-82-82q-4-4-4.5-9.5T440-260q5-5 10-5t10 5l104 104ZM246-478l-53 149q-2 5-5 7t-8 2q-8 0-11.5-6t-1.5-13l178-492q2-5 5-7t8-2h10q5 0 8 2t5 7l176 491q2 8-2 14t-12 6q-5 0-9-2.5t-6-7.5l-50-148H246Zm10-24h214L362-800h-2L256-502Z"/>
    </Icon>
  );
});

IconMaterialSpellcheckW100Filled.displayName = 'OnesyIconMaterialSpellcheckW100Filled';

export default IconMaterialSpellcheckW100Filled;
