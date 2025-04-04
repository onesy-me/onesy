import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialProcedure = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Procedure'

      short_name='Procedure'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-520q-38 0-81-21.5T599-601q-37-38-58.5-81T519-762q0-17 5-31t15-24q26-26 105.5-45.5T794-879q25 2 41.5 6t24.5 12q7 7 11.5 21.5T878-803q5 69-14 152t-46 110q-10 10-25.5 15.5T760-520Zm35-200q2-18 3-38t2-42q-20-1-40.5.5T719-796q11 8 21.5 17t19.5 18q10 10 18.5 20t16.5 21Zm-35 120q1-20-15-49.5T703-704q-25-25-53.5-40.5T601-760q2 23 17 52t37 51q24 24 52.5 39.5T760-600Zm-96 200H297q-16 0-30.5-6T241-423L80-584q-11-11-11-28t11-28q11-11 28-11t28 11l160 160h367q16 0 30.5 6t25.5 17l161 161q11 11 11 28t-11 28q-11 11-28 11t-28-11L664-400ZM360-80q-17 0-28.5-11.5T320-120v-120q0-33 23.5-56.5T400-320h160q33 0 56.5 23.5T640-240v120q0 17-11.5 28.5T600-80H360Zm40-80h160v-80H400v80Zm0 0v-80 80Z"/>
    </Icon>
  );
});

IconMaterialProcedure.displayName = 'OnesyIconMaterialProcedure';

export default IconMaterialProcedure;
