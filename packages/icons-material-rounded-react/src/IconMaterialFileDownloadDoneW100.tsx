import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileDownloadDoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadDoneW100'

      short_name='FileDownloadDone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m382-402 336-336q4-4 9.5-4.5T738-738q5 5 5 10t-5 10L403-383q-9 9-21 9t-21-9L222-522q-4-4-4.5-9.5T222-542q5-5 10-5t10 5l140 140ZM266-212q-6 0-10-4t-4-10q0-6 4-10t10-4h428q6 0 10 4t4 10q0 6-4 10t-10 4H266Z"/>
    </Icon>
  );
});

IconMaterialFileDownloadDoneW100.displayName = 'OnesyIconMaterialFileDownloadDoneW100';

export default IconMaterialFileDownloadDoneW100;
