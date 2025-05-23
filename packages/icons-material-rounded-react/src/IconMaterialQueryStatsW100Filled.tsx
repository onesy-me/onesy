import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQueryStatsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueryStatsW100Filled'

      short_name='QueryStats'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M86-279q-5-3-6-8.5t2-10.5l139-223q8-13 23.5-14t25.5 10l93 109 133-216q9-14 25.5-14.5T547-633l38 57q4 5 2.5 10.5T581-557q-5 3-10 2.5t-9-6.5l-40-59-132 216q-8 13-23.5 14T341-400l-94-110-141 227q-3 5-9 6.5T86-279Zm557 90q-54 0-91-37t-37-91q0-54 37-91t91-37q54 0 91 37t37 91q0 23-7.5 43.5T742-236l131 129q5 4 5 9.5T873-87q-4 4-9.5 4T853-87L722-216q-17 13-37 20t-42 7Zm0-28q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm56-342q-4-2-6-7.5t2-10.5l159-253q3-5 9-6.5t11 2.5q5 3 6 8.5t-2 10.5L717-563q-4 5-8.5 5.5T699-559Z"/>
    </Icon>
  );
});

IconMaterialQueryStatsW100Filled.displayName = 'OnesyIconMaterialQueryStatsW100Filled';

export default IconMaterialQueryStatsW100Filled;
