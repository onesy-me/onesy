import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileUpload = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileUpload'

      short_name='FileUpload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q-.425 0-.712-.288Q11 15.425 11 15V7.85L9.125 9.725q-.3.3-.7.3-.4 0-.725-.325-.3-.3-.287-.713.012-.412.287-.687l3.6-3.6q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l3.6 3.6q.3.3.287.712-.012.413-.287.688-.3.3-.712.312-.413.013-.713-.287L13 7.85V15q0 .425-.287.712Q12.425 16 12 16Zm-6 4q-.825 0-1.412-.587Q4 18.825 4 18v-2q0-.425.287-.713Q4.575 15 5 15t.713.287Q6 15.575 6 16v2h12v-2q0-.425.288-.713Q18.575 15 19 15t.712.287Q20 15.575 20 16v2q0 .825-.587 1.413Q18.825 20 18 20Z"/>
    </Icon>
  );
});

IconMaterialFileUpload.displayName = 'OnesyIconMaterialFileUpload';

export default IconMaterialFileUpload;
