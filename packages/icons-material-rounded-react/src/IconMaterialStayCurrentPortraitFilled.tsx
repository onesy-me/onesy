import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStayCurrentPortraitFilled = (props: IIcon) => {

  return (
    <Icon
      name='StayCurrentPortraitFilled'

      short_name='StayCurrentPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200h400v-480H280v480Z"/>
    </Icon>
  );
};

IconMaterialStayCurrentPortraitFilled.displayName = 'OnesyIconMaterialStayCurrentPortraitFilled';

export default IconMaterialStayCurrentPortraitFilled;
