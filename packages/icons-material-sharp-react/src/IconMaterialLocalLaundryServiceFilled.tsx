import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalLaundryServiceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalLaundryServiceFilled'

      short_name='LocalLaundryService'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-800h640v800H160Zm320-120q83 0 141.5-58.5T680-400q0-83-58.5-141.5T480-600q-83 0-141.5 58.5T280-400q0 83 58.5 141.5T480-200Zm0-68q-26 0-50.5-9.5T386-306l188-188q19 19 28.5 43.5T612-400q0 55-38.5 93.5T480-268ZM320-680q17 0 28.5-11.5T360-720q0-17-11.5-28.5T320-760q-17 0-28.5 11.5T280-720q0 17 11.5 28.5T320-680Zm120 0q17 0 28.5-11.5T480-720q0-17-11.5-28.5T440-760q-17 0-28.5 11.5T400-720q0 17 11.5 28.5T440-680Z"/>
    </Icon>
  );
});

IconMaterialLocalLaundryServiceFilled.displayName = 'OnesyIconMaterialLocalLaundryServiceFilled';

export default IconMaterialLocalLaundryServiceFilled;
