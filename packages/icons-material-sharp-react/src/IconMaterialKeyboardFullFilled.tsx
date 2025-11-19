import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardFullFilled = (props: IIcon) => {

  return (
    <Icon
      name='KeyboardFullFilled'

      short_name='KeyboardFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-240h640v-320H160v320Z"/>
    </Icon>
  );
};

IconMaterialKeyboardFullFilled.displayName = 'OnesyIconMaterialKeyboardFullFilled';

export default IconMaterialKeyboardFullFilled;
