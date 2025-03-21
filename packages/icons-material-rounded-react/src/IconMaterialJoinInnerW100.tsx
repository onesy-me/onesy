import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialJoinInnerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoinInnerW100'

      short_name='JoinInner'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-480q0-45 17.5-87t49.5-74q54-54 129-65.5T429-681q5 3 7 9t-1 11q-3 5-9 6.5t-11-1.5q-58-32-123-22.5T179-621q-28 28-43.5 64.5T120-480q0 40 15.5 76.5T179-339q48 48 113 57.5T415-304q5-3 11-1.5t9 6.5q3 5 1 11t-7 9q-66 37-141 25.5T159-319q-32-32-49.5-74T92-480Zm776 0q0 45-17.5 87T801-319q-54 54-129 65.5T531-279q-5-3-7-9t1-11q3-5 9-6.5t11 1.5q58 32 123 22.5T781-339q28-28 43.5-64.5T840-480q0-40-15.5-76.5T781-621q-48-48-113-57.5T545-656q-5 3-11 1.5t-9-6.5q-3-5-1-11t7-9q66-37 141-25.5T801-641q32 32 49.5 74t17.5 87ZM480-334q-6 0-12-3t-11-8q-21-29-33-63.5T412-480q0-37 12-71.5t33-63.5q5-5 11-8t12-3q6 0 12 3t11 8q21 29 33 63.5t12 71.5q0 37-12 71.5T503-345q-5 5-11 8t-12 3Z"/>
    </Icon>
  );
});

IconMaterialJoinInnerW100.displayName = 'OnesyIconMaterialJoinInnerW100';

export default IconMaterialJoinInnerW100;
