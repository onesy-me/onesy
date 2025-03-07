import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignVerticalBottomW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalBottomW100Filled'

      short_name='AlignVerticalBottom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-158q-6 0-10-4t-4-10q0-6 4-10t10-4h668q6 0 10 4t4 10q0 6-4 10t-10 4H146Zm205-138q-14 0-24.5-10.5T316-331v-437q0-14 10.5-24.5T351-803q14 0 24.5 10.5T386-768v437q0 14-10.5 24.5T351-296Zm258 0q-14 0-24.5-10.5T574-331v-197q0-14 10.5-24.5T609-563q14 0 24.5 10.5T644-528v197q0 14-10.5 24.5T609-296Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalBottomW100Filled.displayName = 'OnesyIconMaterialAlignVerticalBottomW100Filled';

export default IconMaterialAlignVerticalBottomW100Filled;
