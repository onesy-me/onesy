import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPerson3 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person3'

      short_name='Person3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-400q-50 0-85-35t-35-85q0-22 7-41.5t21-35.5q-4-10-6-21t-2-22q0-38 20.5-67.5T374-751q20-23 47-36t59-13q32 0 59 13t47 36q33 14 53.5 43.5T660-640q0 11-2 22t-6 21q14 16 21 35.5t7 41.5q0 50-35 85t-85 35H400Zm0-80h160q17 0 28.5-12t11.5-28q0-7-2.5-13t-7.5-12q-11-13-14.5-25.5T572-594q0-16 4-27.5t4-18.5q0-12-7-22t-18-15q-9-4-16.5-9T525-699q-5-6-16.5-13.5T480-720q-17 0-28.5 8T435-698q-6 7-13.5 12t-16.5 9q-11 5-18 15t-7 22q0 7 4 18.5t4 27.5q0 11-3.5 23.5T370-545q-5 6-7.5 12t-2.5 13q0 16 11.5 28t28.5 12ZM160-80v-112q0-34 17.5-62.5T224-298q62-31 126-46.5T480-360q66 0 130 15.5T736-298q29 15 46.5 43.5T800-192v112H160Zm80-80h480v-32q0-11-5.5-20T700-226q-54-27-109-40.5T480-280q-56 0-111 13.5T260-226q-9 5-14.5 14t-5.5 20v32Zm240 0Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialPerson3.displayName = 'OnesyIconMaterialPerson3';

export default IconMaterialPerson3;
