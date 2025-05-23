import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuickPhrases = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickPhrases'

      short_name='QuickPhrases'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-116q-16 0-28-11.5T320-157v-124q-101-8-170.5-82T80-540q0-109 75.5-184.5T340-800h27l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L388-628q-11 11-27.5 11.5T332-628q-11-11-11-28t11-28l35-36h-27q-75 0-127.5 52.5T160-540q0 75 52.5 127.5T340-360h60v107l107-107h113q75 0 127.5-52.5T800-540q0-75-52.5-127.5T620-720q-17 0-28.5-11.5T580-760q0-17 11.5-28.5T620-800q109 0 184.5 75.5T880-540q0 109-75.5 184.5T620-280h-80L388-128q-6 6-13 9t-15 3Z"/>
    </Icon>
  );
});

IconMaterialQuickPhrases.displayName = 'OnesyIconMaterialQuickPhrases';

export default IconMaterialQuickPhrases;
