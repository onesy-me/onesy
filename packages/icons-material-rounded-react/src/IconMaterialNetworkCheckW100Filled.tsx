import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkCheckW100Filled'

      short_name='NetworkCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M70-530q-6-6-5.5-15t7.5-15q42-37 87.5-67t96.5-50q63-26 129-36.5t134-5.5q8 1 14 7.5t5 14.5q-1 8-7.5 14t-15.5 5q-62-4-122.5 5T275-641q-48 19-91 45.5T103-534q-8 7-17 9t-16-5Zm200 169q-8 7-15.5 5.5T242-362q-5-5-6-13t7-15q38-34 83.5-56t95.5-30q10-2 15.5 3.5T444-459q1 8-2.5 14.5T427-436q-45 7-84 26.5T270-361Zm194 167q-20-7-27-24t1-36l192-432q2-4 6-6t8 0q5 2 7.5 5.5t.5 8.5L522-224q-6 20-22 28.5t-36 1.5Zm425-338q-5 5-13 6.5t-16-6.5q-25-23-58-46t-62-39q-9-5-10.5-12.5T731-644q3-7 10.5-10.5T757-653q32 17 68 43t63 51q7 6 6.5 14t-5.5 13ZM734-346q-5 5-13 6t-15-6q-11-11-25-22.5T654-388q-10-6-11.5-14t3.5-15q5-7 13-9.5t16 3.5q14 10 30.5 23.5T734-374q7 7 6 15t-6 13Z"/>
    </Icon>
  );
});

IconMaterialNetworkCheckW100Filled.displayName = 'OnesyIconMaterialNetworkCheckW100Filled';

export default IconMaterialNetworkCheckW100Filled;
