import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMedicationLiquidW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationLiquidW100'

      short_name='MedicationLiquid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-748v-28h376v28H172Zm148 468h80v-100h100v-80H400v-100h-80v100H220v80h100v100ZM132-172v-496h456v496H132Zm28-28h400v-440H160v440Zm588-201q-35-17-57.5-52T668-533.59q0-57.41 27.5-95.91T762-668q39 0 66.5 38.53Q856-590.95 856-534q0 46-22.5 81T776-401v229h-28v-229Zm14.15-27Q782-428 805-456.48q23-28.49 23-77.5 0-49.02-23.15-77.52-23.16-28.5-43-28.5Q742-640 719-611.52q-23 28.49-23 77.5 0 49.02 23.15 77.52 23.16 28.5 43 28.5ZM360-420Zm402-114Z"/>
    </Icon>
  );
});

IconMaterialMedicationLiquidW100.displayName = 'OnesyIconMaterialMedicationLiquidW100';

export default IconMaterialMedicationLiquidW100;
