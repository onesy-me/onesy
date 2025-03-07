import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEuroSymbolFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EuroSymbolFilled'

      short_name='EuroSymbol'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-120q-118 0-210-67T260-360H160q-17 0-28.5-11.5T120-400q0-17 11.5-28.5T160-440h82q-2-11-2-20v-40q0-9 2-20h-82q-17 0-28.5-11.5T120-560q0-17 11.5-28.5T160-600h100q38-106 130-173t210-67q57 0 107 16.5t94 45.5q17 11 17.5 31T805-713q-14 14-35 16.5t-39-8.5q-29-17-62.5-26t-68.5-9q-75 0-136.5 38.5T370-600h190q17 0 28.5 11.5T600-560q0 17-11.5 28.5T560-520H344q-2 11-3 20t-1 20q0 11 1 20t3 20h216q17 0 28.5 11.5T600-400q0 17-11.5 28.5T560-360H370q32 63 93.5 101.5T600-220q35 0 68.5-8.5T731-254q18-11 39-9t35 16q14 14 13.5 34T801-182q-44 29-94 45.5T600-120Z"/>
    </Icon>
  );
});

IconMaterialEuroSymbolFilled.displayName = 'OnesyIconMaterialEuroSymbolFilled';

export default IconMaterialEuroSymbolFilled;
