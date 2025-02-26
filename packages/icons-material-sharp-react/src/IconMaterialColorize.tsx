import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialColorize = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Colorize'

      short_name='Colorize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-190l358-358-58-56 58-56 76 76 152-152 150 150-151 151 76 78-57 57-56-58-358 358H120Zm80-80h78l332-334-76-76-334 332v78Zm447-410 96-96-37-37-96 96 37 37Zm0 0-37-37 37 37Z"/>
    </Icon>
  );
});

IconMaterialColorize.displayName = 'OnesyIconMaterialColorize';

export default IconMaterialColorize;
