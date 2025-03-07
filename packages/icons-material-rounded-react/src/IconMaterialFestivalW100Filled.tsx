import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFestivalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FestivalW100Filled'

      short_name='Festival'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M150-106q-13 0-21-10t-4-23q17-66 23-133t8-136q-44-12-67-51.5T66-546v-6q0-14 7.5-24.5T94-592q105-39 196.5-100.5T463-831q4-4 8-5.5t9-1.5q5 0 9 1.5t8 5.5q81 77 172.5 138.5T866-592q13 5 20.5 15.5T894-552v6q0 47-23 86.5T804-408q2 69 8 136t23 133q4 13-4 23t-21 10H150Zm-26-468h712q-100-41-188.5-100.5T480-808q-79 74-167.5 133.5T124-574Zm456 140q40 0 63-34t23-78H494q0 44 23 78t63 34Zm-200 0q40 0 63-34t23-78H294q0 44 23 78t63 34Zm-200 0q40 0 63-34t23-78H94q0 44 23 78t63 34Zm-28 300h164q11-70 16.5-139.5T340-414q-20-8-35.5-24T280-474q-13 29-38.5 47.5T184-406q-2 69-8 137t-24 135Zm192 0h272q-11-68-16.5-135.5T592-406q-37 3-68-17t-44-55q-13 35-44 55t-68 17q-2 69-7.5 136.5T344-134Zm300 0h164q-18-67-24-135t-8-137q-32-2-58.5-21T680-476q-8 21-23.5 37T620-414q2 71 7.5 140.5T644-134Zm136-300q40 0 63-34t23-78H694q0 44 23 78t63 34Z"/>
    </Icon>
  );
});

IconMaterialFestivalW100Filled.displayName = 'OnesyIconMaterialFestivalW100Filled';

export default IconMaterialFestivalW100Filled;
