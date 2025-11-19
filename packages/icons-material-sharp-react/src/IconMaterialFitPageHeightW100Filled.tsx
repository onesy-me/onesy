import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFitPageHeightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitPageHeightW100Filled'

      short_name='FitPageHeight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M384-610h192l-96-96-96 96Zm96 356 96-96H384l96 96Zm268 122H212v-696h536v696Z"/>
    </Icon>
  );
});

IconMaterialFitPageHeightW100Filled.displayName = 'OnesyIconMaterialFitPageHeightW100Filled';

export default IconMaterialFitPageHeightW100Filled;
