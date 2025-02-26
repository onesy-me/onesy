import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFoldedHands = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoldedHands'

      short_name='FoldedHands'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M620-320v-109l-45-81q-7 5-11 13t-4 17v229L663-80h-93l-90-148v-252q0-31 15-57t41-43l-56-99q-20-38-17.5-80.5T495-832l68-68 276 324 41 496h-80l-39-464-203-238-6 6q-10 10-11.5 23t4.5 25l155 278v130h-80Zm-360 0v-130l155-278q6-12 4.5-25T408-776l-6-6-203 238-39 464H80l41-496 276-324 68 68q30 30 32.5 72.5T480-679l-56 99q26 17 41 43t15 57v252L390-80h-93l103-171v-229q0-9-4-17t-11-13l-45 81v109h-80Z"/>
    </Icon>
  );
});

IconMaterialFoldedHands.displayName = 'OnesyIconMaterialFoldedHands';

export default IconMaterialFoldedHands;
