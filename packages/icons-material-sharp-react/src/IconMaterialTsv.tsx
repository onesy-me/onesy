import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTsv = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tsv'

      short_name='Tsv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M250-360h60v-180h50v-60H200v60h50v180Zm130 0h160v-146H440v-34h100v-60H380v144h100v36H380v60Zm250 0h60l70-240h-60l-40 138-40-138h-60l70 240ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialTsv.displayName = 'OnesyIconMaterialTsv';

export default IconMaterialTsv;
