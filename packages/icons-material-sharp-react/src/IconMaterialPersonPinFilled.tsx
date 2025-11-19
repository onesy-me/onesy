import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonPinFilled = (props: IIcon) => {

  return (
    <Icon
      name='PersonPinFilled'

      short_name='PersonPin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-40 360-160H120v-720h720v720H600L480-40Zm0-440q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM200-240h560v-46q-54-53-125.5-83.5T480-400q-83 0-154.5 30.5T200-286v46Z"/>
    </Icon>
  );
};

IconMaterialPersonPinFilled.displayName = 'OnesyIconMaterialPersonPinFilled';

export default IconMaterialPersonPinFilled;
