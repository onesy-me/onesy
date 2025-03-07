import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMedicationLiquidW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationLiquidW100Filled'

      short_name='MedicationLiquid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-776h348q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H186q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4Zm134 396v60q0 16.67 11.74 28.33Q343.47-280 360.24-280q16.76 0 28.26-11.67Q400-303.33 400-320v-60h60q16.67 0 28.33-11.74Q500-403.47 500-420.24q0-16.76-11.67-28.26Q476.67-460 460-460h-60v-60q0-16.67-11.74-28.33Q376.53-560 359.76-560q-16.76 0-28.26 11.67Q320-536.67 320-520v60h-60q-16.67 0-28.33 11.74Q220-436.53 220-419.76q0 16.76 11.67 28.26Q243.33-380 260-380h60ZM192-172q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h336q26 0 43 17t17 43v376q0 26-17 43t-43 17H192Zm556-229q-35-17-57.5-52T668-533.59q0-57.41 27.5-95.91T762-668q39 0 66.5 38.53Q856-590.95 856-534q0 46-22.5 81T776-401v215q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-215Z"/>
    </Icon>
  );
});

IconMaterialMedicationLiquidW100Filled.displayName = 'OnesyIconMaterialMedicationLiquidW100Filled';

export default IconMaterialMedicationLiquidW100Filled;
