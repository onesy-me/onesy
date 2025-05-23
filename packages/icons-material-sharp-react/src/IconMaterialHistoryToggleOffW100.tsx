import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHistoryToggleOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HistoryToggleOffW100'

      short_name='HistoryToggleOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M612-329 466-475v-179h28v169l137 137-19 19Zm-441 9q-18-34-27.5-71T132-466h28q2 35 11 68t25 64l-25 14Zm-39-174q2-38 12-75t28-72l24 14q-17 31-25.5 64.5T160-494h-28Zm163 308q-33-21-61-48.5T185-295l24-15q19 30 44.5 55.5T309-210l-14 24Zm-85-465-25-14q21-33 49-60.5t61-48.5l14 24q-30 19-55 44t-44 55Zm256 519q-38-2-75-12t-72-28l14-24q31 17 64.5 25.5T466-160v28ZM333-764l-14-24q35-18 72-28t75-12v28q-35 2-68.5 10.5T333-764Zm161 632v-28q35-2 68.5-10.5T627-196l14 24q-35 18-72 28t-75 12Zm133-632q-31-17-64.5-25.5T494-800v-28q38 2 75 12t72 28l-14 24Zm38 578-14-24q30-19 55-44t44-55l24 14q-21 33-48.5 60.5T665-186Zm85-466q-19-30-44-54.5T651-750l14-24q33 21 60.5 48t48.5 60l-24 14Zm50 158q-2-35-11-68.5T763-628l25-14q18 35 28 72t12 76h-28Zm-12 175-24-14q17-31 25.5-64.5T800-466h28q-2 38-12 75t-28 72Z"/>
    </Icon>
  );
});

IconMaterialHistoryToggleOffW100.displayName = 'OnesyIconMaterialHistoryToggleOffW100';

export default IconMaterialHistoryToggleOffW100;
