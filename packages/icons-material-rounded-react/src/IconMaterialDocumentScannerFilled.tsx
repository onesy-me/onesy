import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDocumentScannerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DocumentScannerFilled'

      short_name='DocumentScanner'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-760v-80q0-33 23.5-56.5T160-920h80q17 0 28.5 11.5T280-880q0 17-11.5 28.5T240-840h-80v80q0 17-11.5 28.5T120-720q-17 0-28.5-11.5T80-760Zm720 0v-80h-80q-17 0-28.5-11.5T680-880q0-17 11.5-28.5T720-920h80q33 0 56.5 23.5T880-840v80q0 17-11.5 28.5T840-720q-17 0-28.5-11.5T800-760ZM80-120v-80q0-17 11.5-28.5T120-240q17 0 28.5 11.5T160-200v80h80q17 0 28.5 11.5T280-80q0 17-11.5 28.5T240-40h-80q-33 0-56.5-23.5T80-120Zm720 80h-80q-17 0-28.5-11.5T680-80q0-17 11.5-28.5T720-120h80v-80q0-17 11.5-28.5T840-240q17 0 28.5 11.5T880-200v80q0 33-23.5 56.5T800-40ZM280-160q-33 0-56.5-23.5T200-240v-480q0-33 23.5-56.5T280-800h400q33 0 56.5 23.5T760-720v480q0 33-23.5 56.5T680-160H280Zm120-400h160q17 0 28.5-11.5T600-600q0-17-11.5-28.5T560-640H400q-17 0-28.5 11.5T360-600q0 17 11.5 28.5T400-560Zm0 120h160q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520H400q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440Zm0 120h160q17 0 28.5-11.5T600-360q0-17-11.5-28.5T560-400H400q-17 0-28.5 11.5T360-360q0 17 11.5 28.5T400-320Z"/>
    </Icon>
  );
});

IconMaterialDocumentScannerFilled.displayName = 'OnesyIconMaterialDocumentScannerFilled';

export default IconMaterialDocumentScannerFilled;
