import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEuroSymbolW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EuroSymbolW100Filled'

      short_name='EuroSymbol'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M614-156q-100 0-186-57.5T304-386H160v-28h136q-3-12-4.5-32t-1.5-34q0-14 1.5-32.5T296-546H160v-28h144q33-104 118-167t192-63q53 0 96 14t90 44l-20 20q-41-26-83-38t-83-12q-104 0-178.5 59.5T334-574h254v28H326q-5 15-6.5 33.5T318-480q0 14 2.5 34.5T326-414h262v28H333q35 103 114 152.5T614-184q41 0 85.5-12.5T780-235l20 21q-48 32-91.5 45T614-156Z"/>
    </Icon>
  );
});

IconMaterialEuroSymbolW100Filled.displayName = 'OnesyIconMaterialEuroSymbolW100Filled';

export default IconMaterialEuroSymbolW100Filled;
