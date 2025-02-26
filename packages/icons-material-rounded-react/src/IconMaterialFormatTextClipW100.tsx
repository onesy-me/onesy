import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatTextClipW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextClipW100'

      short_name='FormatTextClip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M229.96-186q-5.96 0-9.96-4.02-4-4.03-4-9.98v-560q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v560q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm500 0q-5.96 0-9.96-4.02-4-4.03-4-9.98v-266H378q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h338v-266q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v560q0 5.95-4.04 9.98-4.03 4.02-10 4.02Z"/>
    </Icon>
  );
});

IconMaterialFormatTextClipW100.displayName = 'OnesyIconMaterialFormatTextClipW100';

export default IconMaterialFormatTextClipW100;
