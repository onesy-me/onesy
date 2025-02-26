import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditorChoice = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditorChoice'

      short_name='EditorChoice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-40v-329L110-580l185-300h370l185 300-130 211v329l-240-80-240 80Zm80-111 160-53 160 53v-129H320v129Zm20-649L204-580l136 220h280l136-220-136-220H340Zm98 383L296-558l57-57 85 85 169-170 57 56-226 227ZM320-280h320-320Z"/>
    </Icon>
  );
});

IconMaterialEditorChoice.displayName = 'OnesyIconMaterialEditorChoice';

export default IconMaterialEditorChoice;
