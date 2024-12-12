import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDisplayExternalInputW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisplayExternalInputW100Filled'

      short_name='DisplayExternalInput'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m691-91-20-20 89-89H557v-28h204l-90-90 20-19 123 123L691-91Zm-519-81v-188h28v160h160v28H172Zm0-428v-188h188v28H200v160h-28Zm588 0v-160H600v-28h188v188h-28Z"/>
    </Icon>
  );
});

IconMaterialDisplayExternalInputW100Filled.displayName = 'OnesyIconMaterialDisplayExternalInputW100Filled';

export default IconMaterialDisplayExternalInputW100Filled;
