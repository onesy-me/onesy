import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFitPageHeightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitPageHeightW100'

      short_name='FitPageHeight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M384-610h192l-96-96-96 96Zm96 356 96-96H384l96 96Zm268 122H212v-696h536v696Zm-28-28v-640H240v640h480Zm0-640H240h480Z"/>
    </Icon>
  );
});

IconMaterialFitPageHeightW100.displayName = 'OnesyIconMaterialFitPageHeightW100';

export default IconMaterialFitPageHeightW100;
