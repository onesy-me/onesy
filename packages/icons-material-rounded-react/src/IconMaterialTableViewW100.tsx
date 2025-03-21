import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableViewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableViewW100'

      short_name='TableView'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M392-172q-24.75 0-42.37-17.63Q332-207.25 332-232v-336q0-24.75 17.63-42.38Q367.25-628 392-628h336q24.75 0 42.38 17.62Q788-592.75 788-568v336q0 24.75-17.62 42.37Q752.75-172 728-172H392Zm0-314h336q13.6 0 22.8-9.2 9.2-9.2 9.2-22.8v-50q0-13.6-9.2-22.8-9.2-9.2-22.8-9.2H392q-13.6 0-22.8 9.2-9.2 9.2-9.2 22.8v50q0 13.6 9.2 22.8 9.2 9.2 22.8 9.2Zm110 144h116v-116H502v116Zm0 142h116v-114H502v114ZM360-342h114v-116h-84q-12.75 0-21.37 8.62Q360-440.75 360-428v86Zm286 0h114v-86q0-12.75-8.62-21.38Q742.75-458 730-458h-84v116Zm-172 28H360v84q0 12.75 8.63 21.37Q377.25-200 390-200h84v-114Zm172 0v114h84q12.75 0 21.38-8.63Q760-217.25 760-230v-84H646ZM172-728q0-24.75 17.63-42.38Q207.25-788 232-788h382q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H232q-14 0-23 9t-9 23v382q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-382Z"/>
    </Icon>
  );
});

IconMaterialTableViewW100.displayName = 'OnesyIconMaterialTableViewW100';

export default IconMaterialTableViewW100;
