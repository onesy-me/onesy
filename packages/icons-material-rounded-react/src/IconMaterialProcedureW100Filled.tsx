import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialProcedureW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProcedureW100Filled'

      short_name='Procedure'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M722-534q-27 0-60-17.5T599-600q-30-31-47.5-64T534-725q0-7 1-11.5t3-6.5q20-20 84.5-33.5T762-790q8 0 13 1.5t8 4.5q3 3 4.5 8t1.5 13q0 76-12.5 139.5T744-540q-3 3-8.5 4.5T722-534Zm16-61q11-30 16.5-71.5T762-762q-45-1-86.5 5T600-739q25 13 45.5 27.5T683-680q19 19 33 40t22 45Zm-16 33q-8-26-23-52.5T663-662q-22-22-48-37t-52-23q2 23 17.5 51.5T619-619q24 24 52 39.5t51 17.5Zm-47 136H300q-12 0-23.5-5T257-444L98-602q-4-4-4-10t4-10q4-4 10-4t10 4l167 168h375q12 0 23.5 5t19.5 13l159 158q4 4 4 10t-4 10q-4 4-10 4t-10-4L675-426ZM376-133q-13 0-21.5-8.5T346-163v-98q0-25 17.5-42.5T406-321h148q25 0 42.5 17.5T614-261v98q0 13-8.5 21.5T584-133H376Z"/>
    </Icon>
  );
});

IconMaterialProcedureW100Filled.displayName = 'OnesyIconMaterialProcedureW100Filled';

export default IconMaterialProcedureW100Filled;
