import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDownload2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Download2W100'

      short_name='Download2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-132q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h508q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Zm253-168q-6.75 0-13.12-3-6.38-3-10.88-9L307-511q-11-15-2.81-31.5T331-559h62v-239q0-12.75 8.63-21.38Q410.25-828 423-828h113q12.75 0 21.38 8.62Q566-810.75 566-798v239h62q18.62 0 26.81 16.5Q663-526 652-511L503-312q-4.5 6-10.87 9-6.38 3-13.13 3Zm0-26 151-204h-92v-270H421v270h-92l150 204Zm1-204Z"/>
    </Icon>
  );
});

IconMaterialDownload2W100.displayName = 'OnesyIconMaterialDownload2W100';

export default IconMaterialDownload2W100;
