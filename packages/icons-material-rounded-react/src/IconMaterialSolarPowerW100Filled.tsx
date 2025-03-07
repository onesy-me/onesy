import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSolarPowerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SolarPowerW100Filled'

      short_name='SolarPower'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M170-800q-6 0-10-4t-4-10q0-6 4-10t10-4h77q6 0 10 4t4 10q0 6-4 10t-10 4h-77Zm-1 534-12 60q-5 28 12.5 50t46.5 22h250v-132H169Zm60-355 55-55q4-4 9.5-4t9.5 4q5 4 4.5 10t-4.5 10l-55 55q-4 4-9.5 4t-9.5-4q-5-4-4.5-10t4.5-10Zm-54 327h291v-135H251q-22 0-38 13.5T192-381l-17 87Zm291-230v-77q0-6 4-10t10-4q6 0 10 4t4 10v77q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm28 390h249q29 0 46.5-22t12.5-50l-12-60H494v132Zm0-160h290l-17-87q-5-21-21-34.5T708-429H494v135Zm219-307-56-56q-4-4-3.5-9.5t4.5-9.5q4-4 9-4t9 4l57 55q5 4 5 9.5t-5 10.5q-5 5-10 5t-10-5Zm77-199h-77q-6 0-10-4t-4-10q0-6 4-10t10-4h77q6 0 10 4t4 10q0 6-4 10t-10 4ZM480-679q-55 0-96-35t-51-87q-2-11 5.5-19.5T358-829h244q11 0 19 8.5t6 19.5q-10 52-51 87t-96 35Z"/>
    </Icon>
  );
});

IconMaterialSolarPowerW100Filled.displayName = 'OnesyIconMaterialSolarPowerW100Filled';

export default IconMaterialSolarPowerW100Filled;
