import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextSnippetW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSnippetW100Filled'

      short_name='TextSnippet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h332q12.44 0 23.72 5T607-770l163 163q8 8 13 19.28 5 11.28 5 23.72v332q0 24.75-17.62 42.37Q752.75-172 728-172H232Zm88-160h320q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H320q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm0-134h320q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H320q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm0-134h186q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H320q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Z"/>
    </Icon>
  );
});

IconMaterialTextSnippetW100Filled.displayName = 'OnesyIconMaterialTextSnippetW100Filled';

export default IconMaterialTextSnippetW100Filled;
