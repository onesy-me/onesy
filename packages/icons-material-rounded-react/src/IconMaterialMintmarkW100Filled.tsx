import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMintmarkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MintmarkW100Filled'

      short_name='Mintmark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-174 544-390q-3.67-3.75-3.83-9.38Q540-405 544-410q4-5 9.5-5t10.5 5l216 216v-206q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v224q0 12.75-8.62 21.37Q790.75-146 778-146H554q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h206ZM272-346H166q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h194q14 0 23-9t9-23v-108q0-14-9-23t-23-9H212q-24.75 0-42.37-17.63Q152-581.25 152-606v-108q0-24.75 17.63-42.38Q187.25-774 212-774h60v-26q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v26h106q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H212q-14 0-23 9t-9 23v108q0 14 9 23t23 9h148q24.75 0 42.38 17.62Q420-538.75 420-514v108q0 24.75-17.62 42.37Q384.75-346 360-346h-60v26q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-26Z"/>
    </Icon>
  );
});

IconMaterialMintmarkW100Filled.displayName = 'OnesyIconMaterialMintmarkW100Filled';

export default IconMaterialMintmarkW100Filled;
