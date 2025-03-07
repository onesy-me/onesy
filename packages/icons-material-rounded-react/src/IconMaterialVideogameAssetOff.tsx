import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideogameAssetOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideogameAssetOff'

      short_name='VideogameAssetOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M366-480Zm-86 40h-40q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h40v-40q0-17 11.5-28.5T320-600q17 0 28.5 11.5T360-560v40h40q17 0 28.5 11.5T440-480q0 17-11.5 28.5T400-440h-40v40q0 17-11.5 28.5T320-360q-17 0-28.5-11.5T280-400v-40ZM160-240q-33 0-56.5-23.5T80-320v-320q0-34 24-57.5t58-23.5h77l81 81H160v320h366L83-763q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84L606-240H160Zm540-240q-25 0-42.5-17.5T640-540q0-25 17.5-42.5T700-600q25 0 42.5 17.5T760-540q0 25-17.5 42.5T700-480Zm100-240q33 0 56.5 23.5T880-640v320q0 17-11.5 28.5T840-280q-17 0-28.5-11.5T800-320v-320H440q-17 0-28.5-11.5T400-680q0-17 11.5-28.5T440-720h360ZM617-457Z"/>
    </Icon>
  );
});

IconMaterialVideogameAssetOff.displayName = 'OnesyIconMaterialVideogameAssetOff';

export default IconMaterialVideogameAssetOff;
