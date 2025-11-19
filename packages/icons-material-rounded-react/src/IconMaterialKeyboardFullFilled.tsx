import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardFullFilled = (props: IIcon) => {

  return (
    <Icon
      name='KeyboardFullFilled'

      short_name='KeyboardFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-240h640v-320H160v320Z"/>
    </Icon>
  );
};

IconMaterialKeyboardFullFilled.displayName = 'OnesyIconMaterialKeyboardFullFilled';

export default IconMaterialKeyboardFullFilled;
