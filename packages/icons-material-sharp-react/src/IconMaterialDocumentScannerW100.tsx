import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDocumentScannerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DocumentScannerW100'

      short_name='DocumentScanner'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M106-746v-148h148v28H134v120h-28Zm720 0v-120H706v-28h148v148h-28ZM106-66v-148h28v120h120v28H106Zm600 0v-28h120v-120h28v148H706ZM254-214h452v-532H254v532Zm-28 28v-588h508v588H226Zm160-400h188v-28H386v28Zm0 120h188v-28H386v28Zm0 120h188v-28H386v28ZM254-246v-500 532-32Z"/>
    </Icon>
  );
});

IconMaterialDocumentScannerW100.displayName = 'OnesyIconMaterialDocumentScannerW100';

export default IconMaterialDocumentScannerW100;
