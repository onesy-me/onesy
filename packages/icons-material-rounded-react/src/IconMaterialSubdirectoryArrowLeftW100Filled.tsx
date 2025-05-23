import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubdirectoryArrowLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubdirectoryArrowLeftW100Filled'

      short_name='SubdirectoryArrowLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m266-346 144 144q4 4 4.5 9.5T410-182q-5 5-10 5t-10-5L233-339q-5-5-7-10t-2-11q0-6 2-11t7-10l157-157q4-4 9.5-4.5T410-538q5 5 5 10t-5 10L266-374h382q14 0 23-9t9-23v-328q0-6 4-10t10-4q6 0 10 4t4 10v328q0 25-17.5 42.5T648-346H266Z"/>
    </Icon>
  );
});

IconMaterialSubdirectoryArrowLeftW100Filled.displayName = 'OnesyIconMaterialSubdirectoryArrowLeftW100Filled';

export default IconMaterialSubdirectoryArrowLeftW100Filled;
