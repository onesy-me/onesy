import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnpublishedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnpublishedW100'

      short_name='Unpublished'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-160q59 0 111-20t94-55L505-415l-62 62q-8.8 9-20.9 9-12.1 0-21.1-9L298-456q-4-4-4.5-9.5T298-476q5-5 10-5t10 5l104 104 63-63-250-250q-35 42-55 94t-20 111q0 133 93.5 226.5T480-160Zm101-331-20-20 79-79q4-4 9.5-4.5T660-590q5 5 5 10t-5 10l-79 79Zm203 355-79-79q-46 39-103 61t-122 22q-72.21 0-135.72-27.4-63.51-27.41-110.49-74.39-46.98-46.98-74.39-110.49Q132-407.79 132-480q0-65 22-122t61-103l-79-79q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5ZM480-800q-39.53 0-77.27 9Q365-782 332-764q-5 3-11 1.29t-9-6.5q-3-4.79-1-10.29 2-5.5 7-8.5 37-19 77.5-29.5T480-828q72.21 0 135.72 27.41 63.51 27.4 110.49 74.38t74.38 110.49Q828-552.21 828-480q0 45-10.5 86T787-315q-2.69 5-8.85 6.5-6.15 1.5-10.94-1.5-4.79-3-6.5-9t1.29-11q18-34 28-71.5t10-78.5q0-133-93.5-226.5T480-800Zm56 264Zm-76 76Z"/>
    </Icon>
  );
});

IconMaterialUnpublishedW100.displayName = 'OnesyIconMaterialUnpublishedW100';

export default IconMaterialUnpublishedW100;
