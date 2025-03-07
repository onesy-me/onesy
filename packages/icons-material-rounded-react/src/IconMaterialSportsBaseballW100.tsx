import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsBaseballW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsBaseballW100'

      short_name='SportsBaseball'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-266q51-37 78.5-94T346-480q0-63-27.5-120T240-694q-39 45-59.5 99.5T160-480q0 60 20.5 114.5T240-266Zm240 106q61 0 117-22t101-64q-53-44-82.5-104.5T586-480q0-69 29.5-129.5T698-714q-45-42-101-64t-117-22q-61 0-117 22t-101 64q53 44 82.5 104.5T374-480q0 69-29.5 129.5T262-246q45 42 101 64t117 22Zm240-106q39-45 59.5-99.5T800-480q0-60-20.5-114.5T720-694q-51 37-78.5 94T614-480q0 63 27.5 120t78.5 94ZM480-480Zm.17 348q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialSportsBaseballW100.displayName = 'OnesyIconMaterialSportsBaseballW100';

export default IconMaterialSportsBaseballW100;
