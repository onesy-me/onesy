import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMintmarkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MintmarkW100'

      short_name='Mintmark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M540-146v-28h220L540-394v-40l240 240v-220h28v268H540ZM272-306v-40H152v-28h240v-172H152v-228h120v-40h28v40h120v28H180v172h240v228H300v40h-28Z"/>
    </Icon>
  );
});

IconMaterialMintmarkW100.displayName = 'OnesyIconMaterialMintmarkW100';

export default IconMaterialMintmarkW100;
