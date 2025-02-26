import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabelImportantW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelImportantW100Filled'

      short_name='LabelImportant'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M227-252q-18 0-26.5-15.5T202-298l105-165q5-8 5-17t-5-17L202-662q-10-15-1.5-30.5T227-708h353q22 0 41.5 10t32.5 28l109 155q11 16 11 35t-11 35L650-288q-12 17-30.5 26.5T580-252H227Z"/>
    </Icon>
  );
});

IconMaterialLabelImportantW100Filled.displayName = 'OnesyIconMaterialLabelImportantW100Filled';

export default IconMaterialLabelImportantW100Filled;
