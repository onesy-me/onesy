import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMedicalInformationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalInformationFilled'

      short_name='MedicalInformation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-320v40q0 17 11.5 28.5T320-240q17 0 28.5-11.5T360-280v-40h40q17 0 28.5-11.5T440-360q0-17-11.5-28.5T400-400h-40v-40q0-17-11.5-28.5T320-480q-17 0-28.5 11.5T280-440v40h-40q-17 0-28.5 11.5T200-360q0 17 11.5 28.5T240-320h40Zm270-60h180q13 0 21.5-8.5T760-410q0-13-8.5-21.5T730-440H550q-13 0-21.5 8.5T520-410q0 13 8.5 21.5T550-380Zm0 120h100q13 0 21.5-8.5T680-290q0-13-8.5-21.5T650-320H550q-13 0-21.5 8.5T520-290q0 13 8.5 21.5T550-260ZM160-80q-33 0-56.5-23.5T80-160v-440q0-33 23.5-56.5T160-680h200v-120q0-33 23.5-56.5T440-880h80q33 0 56.5 23.5T600-800v120h200q33 0 56.5 23.5T880-600v440q0 33-23.5 56.5T800-80H160Zm280-520h80v-200h-80v200Z"/>
    </Icon>
  );
});

IconMaterialMedicalInformationFilled.displayName = 'OnesyIconMaterialMedicalInformationFilled';

export default IconMaterialMedicalInformationFilled;
