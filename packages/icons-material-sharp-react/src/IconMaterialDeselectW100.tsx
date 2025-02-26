import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeselectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeselectW100'

      short_name='Deselect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M794-126 604-316H316v-288L126-794l20-20 668 668-20 20ZM344-344h232L344-576v232Zm300-85-28-28v-159H457l-28-28h215v215ZM316-172v-40h40v40h-40Zm0-576v-40h40v40h-40Zm144 576v-40h40v40h-40Zm0-576v-40h40v40h-40Zm144 0v-40h40v40h-40Zm0 576v-40h40v40h-40Zm144-576v-40h40v40h-40ZM172-172v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm576 288v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialDeselectW100.displayName = 'OnesyIconMaterialDeselectW100';

export default IconMaterialDeselectW100;
