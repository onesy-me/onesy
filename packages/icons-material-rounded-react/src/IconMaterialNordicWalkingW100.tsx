import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNordicWalkingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NordicWalkingW100'

      short_name='NordicWalking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m187-83 63-290q.93-5.26 4.65-8.13 3.72-2.87 8.84-2.87 6.51 0 10.51 5t2 12L213-77q-.93 5.26-4.65 8.13-3.72 2.87-8.84 2.87Q193-66 189-71t-2-12Zm130 1 109-566-132 55v113q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-112q0-9.29 5.5-16.65Q277-616 285-620l158-65q27-11 48-6.5t35 25.5l39 63q24 38 64 66.5t90 38.5q6 2 10.5 6.14t4.5 10q0 5.86-4.5 9.36Q725-469 719-470q-57-8-106.5-43T527-611l-39 199 77 74q5 5 7 10.54 2 5.55 2 11.46v236q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-209L420-410 344-77q-.95 4.81-4.6 7.91Q335.76-66 331-66q-7.27 0-11.64-5Q315-76 317-82Zm223-674q-26.4 0-45.2-18.8Q476-793.6 476-820q0-26.4 18.8-45.2Q513.6-884 540-884q26.4 0 45.2 18.8Q604-846.4 604-820q0 26.4-18.8 45.2Q566.4-756 540-756ZM716-80v-290q0-6.07 3.95-10.03 3.96-3.97 10-3.97 6.05 0 10.05 3.97 4 3.96 4 10.03v290q0 6.07-3.95 10.03-3.96 3.97-10 3.97Q724-66 720-69.97q-4-3.96-4-10.03Z"/>
    </Icon>
  );
});

IconMaterialNordicWalkingW100.displayName = 'OnesyIconMaterialNordicWalkingW100';

export default IconMaterialNordicWalkingW100;
