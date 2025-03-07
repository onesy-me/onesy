import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoLuggageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoLuggageW100Filled'

      short_name='NoLuggage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M842-78 711-209q-7 17-21.5 27T656-172v12q0 11-8.5 19.5T628-132q-11 0-19.5-8.5T600-160v-12H360v12q0 11-8.5 19.5T332-132q-11 0-19.5-8.5T304-160v-12q-25 0-42.5-17.5T244-232v-408q0-8 1.5-15t5.5-14L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5ZM392-528v234q0 6 4 10t10 4q6 0 10-4t4-10v-206l-28-28Zm148 148v86q0 6 4 10t10 4q6 0 10-4t4-10v-58l-28-28Zm125-57-97-97v-44q0-6-4-10t-10-4q-6 0-10 4t-4 10v16L410-692q-8-8-13-19.5t-5-23.5v-33q0-25 17.5-42.5T452-828h56q25 0 42.5 17.5T568-768v68h88q25 0 42.5 17.5T716-640v182q0 20-18.5 27.5T665-437ZM420-700h120v-68q0-14-9-23t-23-9h-56q-14 0-23 9t-9 23v68Z"/>
    </Icon>
  );
});

IconMaterialNoLuggageW100Filled.displayName = 'OnesyIconMaterialNoLuggageW100Filled';

export default IconMaterialNoLuggageW100Filled;
