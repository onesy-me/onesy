import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMedicalMask = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalMask'

      short_name='MedicalMask'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-198q-81 0-160.5-7T160-225v-100q-53-14-86.5-57T40-480q0-54 33.5-97t86.5-57v-135q80 13 159.5 20t160.5 7q81 0 160.5-7T800-769v135q53 14 86.5 56.5T920-480q0 55-33.5 97.5T800-326v101q-80 13-159.5 20T480-198Zm0-82q60 0 120-5t120-12v-382q-60 7-120 12t-120 5q-60 0-120-5t-120-12v382q60 7 120 12t120 5Zm0-60q48 0 95-7t95-19v-83q-48 13-95 21t-95 8q-48 0-94.5-8T291-449v83q48 12 94.5 19t94.5 7Zm-320-71v-137q-19 11-29.5 29T120-480q0 22 10.5 40t29.5 29Zm640 0q19-11 29.5-29t10.5-40q0-21-11-39t-29-29v137Zm-320-89q48 0 95-7t95-19v-83q-48 13-95 21t-95 8q-48 0-94.5-8T291-609v83q48 12 94.5 19t94.5 7ZM240-297v-382 382Z"/>
    </Icon>
  );
});

IconMaterialMedicalMask.displayName = 'OnesyIconMaterialMedicalMask';

export default IconMaterialMedicalMask;
