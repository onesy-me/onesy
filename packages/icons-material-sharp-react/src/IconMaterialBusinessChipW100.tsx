import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBusinessChipW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessChipW100'

      short_name='BusinessChip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-326h308v-228h-80v-80H406v80h-80v228Zm108-228v-52h92v52h-92ZM320-252q-95.27 0-161.64-66.31Q92-384.62 92-479.81t66.36-161.69Q224.73-708 320-708h320q95.27 0 161.64 66.31Q868-575.38 868-480.19T801.64-318.5Q735.27-252 640-252H320Zm0-28h320q83 0 141.5-58.5T840-480q0-83-58.5-141.5T640-680H320q-83 0-141.5 58.5T120-480q0 83 58.5 141.5T320-280Zm160-200Z"/>
    </Icon>
  );
});

IconMaterialBusinessChipW100.displayName = 'OnesyIconMaterialBusinessChipW100';

export default IconMaterialBusinessChipW100;
