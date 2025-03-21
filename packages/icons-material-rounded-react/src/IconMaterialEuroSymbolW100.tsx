import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEuroSymbolW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EuroSymbolW100'

      short_name='EuroSymbol'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M614-156q-100 0-186-57.5T304-386H174q-6 0-10-4t-4-10q0-6 4-10t10-4h122q-3-12-4.5-32t-1.5-34q0-14 1.5-32.5T296-546H174q-6 0-10-4t-4-10q0-6 4-10t10-4h130q33-104 118-167t192-63q49 0 89.5 12t83.5 38q5 3 6 8.5t-3 9.5q-5 5-11 5t-12-3q-38-22-76.5-32T614-776q-104 0-178.5 59.5T334-574h240q6 0 10 4t4 10q0 6-4 10t-10 4H326q-5 15-6.5 33.5T318-480q0 14 2.5 34.5T326-414h248q6 0 10 4t4 10q0 6-4 10t-10 4H333q35 103 114 152.5T614-184q37 0 77.5-10.5T767-226q6-4 12-4t11 5q4 5 3 10.5t-6 8.5q-44 27-84.5 38.5T614-156Z"/>
    </Icon>
  );
});

IconMaterialEuroSymbolW100.displayName = 'OnesyIconMaterialEuroSymbolW100';

export default IconMaterialEuroSymbolW100;
