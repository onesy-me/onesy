import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardTabFilled = (props: IIcon) => {

  return (
    <Icon
      name='KeyboardTabFilled'

      short_name='KeyboardTab'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-240v-480h80v480h-80Zm-320 0-57-56 144-144H80v-80h487L424-664l56-56 240 240-240 240Z"/>
    </Icon>
  );
};

IconMaterialKeyboardTabFilled.displayName = 'OnesyIconMaterialKeyboardTabFilled';

export default IconMaterialKeyboardTabFilled;
