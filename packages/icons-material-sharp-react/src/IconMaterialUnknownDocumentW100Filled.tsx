import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnknownDocumentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnknownDocumentW100Filled'

      short_name='UnknownDocument'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M644-184q8.46 0 14.23-5.77T664-204q0-8.46-5.77-14.23T644-224q-8.46 0-14.23 5.77T624-204q0 8.46 5.77 14.23T644-184Zm-14-70h28v-6q0-12 6-19t14-15q14-12 22-25t8-31.37q0-26.63-17.75-44.13-17.74-17.5-45.77-17.5-21.48 0-39.98 13.5Q586-385 578-364l26 10q5-12 15.5-21t24.5-9q16.88 0 26.44 8.41 9.56 8.42 9.56 25.25 0 12.34-7 20.34t-15 16q-6 6-11.5 13T636-287.71q-3 4.71-4.5 11.21-1.5 6.5-1.5 12.32V-254Zm14 106q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43ZM532-652h148L532-800l148 148-148-148v148ZM172-132v-696h374l162 162v130q-16-5-31.5-6.5T644-544q-58 0-107.5 24T453-454H306v28h127q-17 29-27 62.5T396-294h-90v28h91.78Q403-229 418-195t40 63H172Z"/>
    </Icon>
  );
});

IconMaterialUnknownDocumentW100Filled.displayName = 'OnesyIconMaterialUnknownDocumentW100Filled';

export default IconMaterialUnknownDocumentW100Filled;
