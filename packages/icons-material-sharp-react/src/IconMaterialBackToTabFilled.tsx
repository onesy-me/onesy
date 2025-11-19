import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackToTabFilled = (props: IIcon) => {

  return (
    <Icon
      name='BackToTabFilled'

      short_name='BackToTab'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M331-492 160-663v143H80v-280h280v80H216l172 171-57 57ZM80-160v-280h80v200h320v80H80Zm720-280v-280H440v-80h440v360h-80Zm80 80v200H560v-200h320Z"/>
    </Icon>
  );
};

IconMaterialBackToTabFilled.displayName = 'OnesyIconMaterialBackToTabFilled';

export default IconMaterialBackToTabFilled;
