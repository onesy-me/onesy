import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatParagraphW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatParagraphW100'

      short_name='FormatParagraph'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M430-216v-236h-10q-62 0-105-43t-43-105q0-62 43-105t105-43h226v28h-80v504h-28v-504h-80v504h-28Z"/>
    </Icon>
  );
});

IconMaterialFormatParagraphW100.displayName = 'OnesyIconMaterialFormatParagraphW100';

export default IconMaterialFormatParagraphW100;
