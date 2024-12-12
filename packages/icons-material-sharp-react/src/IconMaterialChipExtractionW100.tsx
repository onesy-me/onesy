import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChipExtractionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChipExtractionW100'

      short_name='ChipExtraction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-172q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-64 24-120t66-98q42-42 98-66t120-24v28q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200v28Zm160-145-20-20 130-129H386v-28h363L620-624l20-19 163 163-163 163Z"/>
    </Icon>
  );
});

IconMaterialChipExtractionW100.displayName = 'OnesyIconMaterialChipExtractionW100';

export default IconMaterialChipExtractionW100;
