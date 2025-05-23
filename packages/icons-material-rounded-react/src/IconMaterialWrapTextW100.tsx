import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWrapTextW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrapTextW100'

      short_name='WrapText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-473q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h447q48.3 0 81.65 34.5Q788-432 788-384t-33.35 83Q721.3-266 673-266H530l61 64q4 5 3.83 10.45-.16 5.46-3.83 9.55-5 5-10.5 5t-9.5-5l-75-77q-4-5-6-10.13-2-5.14-2-11 0-5.87 2.5-10.87 2.5-5 6.5-10l74-76q4-5 9.5-5t10.72 5q4.78 5 4.28 10t-4.5 10l-61 63h143q37 0 62-26.3t25-63.5q0-37.2-25-63.2t-62-26H226Zm0 207q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h110q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H226Zm0-414q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h511q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Z"/>
    </Icon>
  );
});

IconMaterialWrapTextW100.displayName = 'OnesyIconMaterialWrapTextW100';

export default IconMaterialWrapTextW100;
