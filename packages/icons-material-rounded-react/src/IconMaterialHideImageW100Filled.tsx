import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHideImageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImageW100Filled'

      short_name='HideImage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M788-728v370q0 10-5.5 17T769-331q-8 3-16.5 2t-15.5-8L337-737q-7-7-8-15.5t2-16.5q3-8 10-13.5t17-5.5h370q26 0 43 17t17 43ZM232-172q-26 0-43-17t-17-43v-516l-70-70q-4-4-4.5-9.5T102-838q5-5 10-5t10 5l716 716q4 4 4.5 9.5T838-102q-5 5-10 5t-10-5l-70-70H232Zm382-134-97-97-69 85-52-60q-5-5-11.5-5t-11.5 6l-36 47q-6 8-2 16t13 8h266Z"/>
    </Icon>
  );
});

IconMaterialHideImageW100Filled.displayName = 'OnesyIconMaterialHideImageW100Filled';

export default IconMaterialHideImageW100Filled;
