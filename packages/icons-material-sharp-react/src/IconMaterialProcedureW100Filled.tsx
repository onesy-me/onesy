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
      <path d="M722-534q-27 0-60-17.5T599-600q-30-31-47.5-64T534-725q0-7 1-11.5t3-6.5q20-20 84.5-33.5T762-790q8 0 13 1.5t8 4.5q3 3 4.5 8t1.5 13q0 76-12.5 139.5T744-540q-3 3-8.5 4.5T722-534Zm16-61q11-30 16.5-71.5T762-762q-45-1-86.5 5T600-739q25 13 45.5 27.5T683-680q19 19 33 40t22 45Zm-16 33q-8-26-23-52.5T663-662q-22-22-48-37t-52-23q2 23 17.5 51.5T619-619q24 24 52 39.5t51 17.5Zm130 313L675-426H275L89-612l19-19 177 177h400l186 186-19 19ZM346-133v-128q0-25 17.5-42.5T406-321h148q25 0 42.5 17.5T614-261v128H346Z"/>
    </Icon>
  );
});

IconMaterialProcedureW100Filled.displayName = 'OnesyIconMaterialProcedureW100Filled';

export default IconMaterialProcedureW100Filled;
