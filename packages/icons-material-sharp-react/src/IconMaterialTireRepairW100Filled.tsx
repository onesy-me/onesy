import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTireRepairW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TireRepairW100Filled'

      short_name='TireRepair'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M262-633v-40l-59-59h-9v31l68 68Zm108 0 68-68v-31h-9l-59 59v40ZM262-463v-40l-68-68v40l68 68Zm108 0 68-68v-40l-68 68v40ZM262-293v-40l-68-68v40l68 68Zm108 0 68-68v-40l-68 68v40Zm354.4-326q-14.4 0-24.4-9.82-10-9.83-10-24.35 0-6.83 2.5-12.78Q695-671.9 700-677q11-11 47.5-23.5L784-713q-6 20-13 37-5.08 14.46-11.44 28.07-6.35 13.62-11.43 18.72-5.09 5.11-11.02 7.66T724.4-619ZM225.77-197q-24.77 0-42.27-17.63Q166-232.25 166-257v-452q0-24.75 17.64-42.38Q201.28-769 226.06-769h180.17q24.77 0 42.27 17.62Q466-733.75 466-709v280h136v204h108v-244h-34v-42q-47-20-74.5-58.5T574-653.31q0-62.69 43.88-106.19Q661.75-803 724-803q63 0 106.5 43.5T874-653.31q0 45.31-27.5 83.81T772-511v42h-34v272H574v-204H466v144q0 24.75-17.64 42.37Q430.72-197 405.94-197H225.77Zm498.35-334q50.88 0 86.38-35.62 35.5-35.62 35.5-86.5t-35.62-86.38q-35.62-35.5-86.5-35.5t-86.38 35.62q-35.5 35.62-35.5 86.5t35.62 86.38q35.62 35.5 86.5 35.5Z"/>
    </Icon>
  );
});

IconMaterialTireRepairW100Filled.displayName = 'OnesyIconMaterialTireRepairW100Filled';

export default IconMaterialTireRepairW100Filled;
