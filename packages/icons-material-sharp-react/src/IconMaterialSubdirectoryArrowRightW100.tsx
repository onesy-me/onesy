import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubdirectoryArrowRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubdirectoryArrowRightW100'

      short_name='SubdirectoryArrowRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m560-172-20-20 154-154H252v-402h28v374h414L540-528l20-20 188 188-188 188Z"/>
    </Icon>
  );
});

IconMaterialSubdirectoryArrowRightW100.displayName = 'OnesyIconMaterialSubdirectoryArrowRightW100';

export default IconMaterialSubdirectoryArrowRightW100;
