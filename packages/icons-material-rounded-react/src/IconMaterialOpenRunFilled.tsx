import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenRunFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenRunFilled'

      short_name='OpenRun'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-193 57-57q12-12 28-12t28 12q12 12 12 28.5T593-193l-85 85q-6 6-13 8.5T480-97q-8 0-15-2.5t-13-8.5l-85-85q-12-12-12-28.5t12-28.5q12-12 28-12t28 12l57 57ZM193-480l57 57q12 12 12 28t-12 28q-12 12-28.5 12T193-367l-85-85q-6-6-8.5-13T97-480q0-8 2.5-15t8.5-13l85-85q12-12 28.5-12t28.5 12q12 12 12 28t-12 28l-57 57Zm574 0-57-57q-12-12-12-28t12-28q12-12 28.5-12t28.5 12l85 85q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13l-85 85q-12 12-28.5 12T710-367q-12-12-12-28t12-28l57-57ZM480-767l-57 57q-12 12-28 12t-28-12q-12-12-12-28.5t12-28.5l85-85q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l85 85q12 12 12 28.5T593-710q-12 12-28 12t-28-12l-57-57Z"/>
    </Icon>
  );
});

IconMaterialOpenRunFilled.displayName = 'OnesyIconMaterialOpenRunFilled';

export default IconMaterialOpenRunFilled;
