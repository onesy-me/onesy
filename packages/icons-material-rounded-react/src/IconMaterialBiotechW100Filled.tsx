import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBiotechW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BiotechW100Filled'

      short_name='Biotech'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-146q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h186v-132h-26q-72.21 0-123.1-50.9Q246-407.79 246-480q0-50.67 26.5-93.33Q299-616 346-636q0 8 1.5 14.5T351-608q-36 18-56.5 52.5T274-480q0 60.83 42.58 103.42Q359.17-334 420-334h280q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H474v132h226q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H260Zm321-375-7-19-9 4q-12 5-23.5-.5T525-554l-10-29q10-12 14.5-26.26Q534-623.52 534-640q0-33-20.5-59T461-732l-11-30q-5-11.73 1-22.37Q457-795 468-800l10-4-7-19q-3-8 .39-15.46 3.38-7.45 11.61-10.54 8-3 15.68.36 7.67 3.36 10.32 11.64l7 19 6-2q11-4 22 1.5t16 16.5l76 207q5 11-.5 22T619-557l-7 3 7 19q3 8-.39 15.5Q615.23-512 607-509q-8 3-15.68-.36-7.67-3.36-10.32-11.64Zm-141-53q-27.5 0-46.75-19.25T374-640q0-27.5 19.25-46.75T440-706q27.5 0 46.75 19.25T506-640q0 27.5-19.25 46.75T440-574Z"/>
    </Icon>
  );
});

IconMaterialBiotechW100Filled.displayName = 'OnesyIconMaterialBiotechW100Filled';

export default IconMaterialBiotechW100Filled;
