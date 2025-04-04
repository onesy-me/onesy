import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFinanceChipW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FinanceChipW100'

      short_name='FinanceChip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M475-325h19v-31q28-3.79 47.5-21.79t19.5-46.42q0-24.63-20-41.21Q521-482 495-493v-83q12 2 21 9.5t13 16.5l26-11q-8-17-24.07-28.21Q514.85-600.41 495-604v-31h-20v31q-28 2.78-47.5 18.97-19.5 16.2-19.5 43.04 0 24.99 20.5 42.61Q449-481.77 475-471v86q-20-3-32.5-14.5T425-427l-26 11q8 24.5 28 40.25T475-356v31Zm20-60v-79q14.93 6.84 26.46 16.42Q533-438 533-422.6q0 17.6-10.5 26.1T495-385Zm-20-116q-14-7-26.5-16.5T436-542q0-16.59 12-24.3 12-7.7 27-9.7v75ZM320-252q-95.27 0-161.64-66.31Q92-384.62 92-479.81t66.36-161.69Q224.73-708 320-708h320q95.27 0 161.64 66.31Q868-575.38 868-480.19T801.64-318.5Q735.27-252 640-252H320Zm0-28h320q83 0 141.5-58.5T840-480q0-83-58.5-141.5T640-680H320q-83 0-141.5 58.5T120-480q0 83 58.5 141.5T320-280Zm160-200Z"/>
    </Icon>
  );
});

IconMaterialFinanceChipW100.displayName = 'OnesyIconMaterialFinanceChipW100';

export default IconMaterialFinanceChipW100;
