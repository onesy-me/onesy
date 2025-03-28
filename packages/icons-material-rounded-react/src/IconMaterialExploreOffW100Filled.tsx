import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExploreOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExploreOffW100Filled'

      short_name='ExploreOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-65 22-122t61-103l-79-79q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5l-79-79q-46 39-103 61t-122 22Zm26-282-92-92-110 181q-6 11 2 19t19 2l181-110Zm-26-414q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480q0 35-7 70t-21 68q-5 11-13.5 16t-19.5 5q-8 0-14.5-2.5T740-332L589-483q-8-8-8.5-18t4.5-19l71-115q6-10-2-18t-19-3l-115 71q-9 5-19 4.5t-18-8.5L332-740q-5-5-8-12t-3-14q0-11 5-20t16-14q33-14 68-21t70-7Z"/>
    </Icon>
  );
});

IconMaterialExploreOffW100Filled.displayName = 'OnesyIconMaterialExploreOffW100Filled';

export default IconMaterialExploreOffW100Filled;
