import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllergies = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Allergies'

      short_name='Allergies'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-510v230q0 17 11.5 28.5T420-240q17 0 28.5-11.5T460-280v-235q0-7-1.5-14t-4.5-13l-61-120q-8-15-23-20.5t-30 2.5q-15 8-20.5 23.5T322-626l58 116Zm200 0 58-117q8-15 2.5-30T620-680q-15-8-30.5-2.5T566-662l-60 120q-3 6-4.5 13t-1.5 14v235q0 17 11.5 28.5T540-240q17 0 28.5-11.5T580-280v-230Zm60 70q15 8 30.5 2.5T694-458l44-88q8-15 2.5-30.5T720-600q-15-8-30.5-2.5T666-582l-44 89q-8 15-2.5 30t20.5 23Zm-320 0q15-8 20.5-23.5T338-494l-44-88q-8-15-23.5-20.5T240-600q-15 8-20.5 23.5T222-546l44 88q8 15 23.5 20.5T320-440ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialAllergies.displayName = 'OnesyIconMaterialAllergies';

export default IconMaterialAllergies;
