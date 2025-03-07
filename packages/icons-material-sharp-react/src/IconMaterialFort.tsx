import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFort = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Fort'

      short_name='Fort'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-160l80-80v-240l-80-80v-160h80v80h80v-80h80v80h80v-80h80v160l-80 80v40h240v-40l-80-80v-160h80v80h80v-80h80v80h80v-80h80v160l-80 80v240l80 80v160H560v-200H400v200H40Zm80-80h200v-200h320v200h200v-47l-80-80v-306l47-47H633l47 47v153H280v-153l47-47H153l47 47v306l-80 80v47Zm360-240Z"/>
    </Icon>
  );
});

IconMaterialFort.displayName = 'OnesyIconMaterialFort';

export default IconMaterialFort;
