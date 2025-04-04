import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFeedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeedW100Filled'

      short_name='Feed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h361q12.44 0 23.72 5T636-770l134 134q8 8 13 19.28 5 11.28 5 23.72v361q0 26-17 43t-43 17H232Zm368-588v130q0 12.75 8.63 21.37Q617.25-600 630-600h130L600-760Zm40 428q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H320q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h320ZM466-600q5.95 0 9.98-4.04 4.02-4.03 4.02-10 0-5.96-4.02-9.96-4.03-4-9.98-4H320q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h146Zm174 134q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H320q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h320Z"/>
    </Icon>
  );
});

IconMaterialFeedW100Filled.displayName = 'OnesyIconMaterialFeedW100Filled';

export default IconMaterialFeedW100Filled;
