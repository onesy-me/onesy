import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnfloatLandscapeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfloatLandscapeW100'

      short_name='UnfloatLandscape'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M192 844q-26 0-43-17t-17-43V368q0-26 17-43t43-17h576q26 0 43 17t17 43v142q0 6-4 10t-10 4q-6 0-10-4t-4-10V368q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9h382q6 0 10 4t4 10q0 6-4 10t-10 4H192Zm76-380 176 176q4 4 9.5 4.5T464 640q5-5 5-10t-5-10L287 444h127q6 0 10-4t4-10q0-6-4-10t-10-4H270q-13 0-21.5 8.5T240 446v144q0 6 4 10t10 4q6 0 10-4t4-10V464Zm450 380q-13 0-21.5-8.5T688 814V654q0-13 8.5-21.5T718 624h80q13 0 21.5 8.5T828 654v160q0 13-8.5 21.5T798 844h-80ZM480 576Z"/>
    </Icon>
  );
});

IconMaterialUnfloatLandscapeW100.displayName = 'OnesyIconMaterialUnfloatLandscapeW100';

export default IconMaterialUnfloatLandscapeW100;
