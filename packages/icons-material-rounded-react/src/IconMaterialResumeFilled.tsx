import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialResumeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResumeFilled'

      short_name='Resume'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280v-400q0-17 11.5-28.5T280-720q17 0 28.5 11.5T320-680v400q0 17-11.5 28.5T280-240q-17 0-28.5-11.5T240-280Zm221 4q-20 12-40.5 0T400-311v-338q0-23 20.5-35t40.5 0l282 170q20 12 20 34t-20 34L461-276Z"/>
    </Icon>
  );
});

IconMaterialResumeFilled.displayName = 'OnesyIconMaterialResumeFilled';

export default IconMaterialResumeFilled;
