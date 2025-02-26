import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWysiwygW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WysiwygW100Filled'

      short_name='Wysiwyg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h496q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172H232Zm0-28h496q14 0 23-9t9-23v-448H200v448q0 14 9 23t23 9Zm62-306q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h372q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H294Zm0 160q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h212q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H294Z"/>
    </Icon>
  );
});

IconMaterialWysiwygW100Filled.displayName = 'OnesyIconMaterialWysiwygW100Filled';

export default IconMaterialWysiwygW100Filled;
