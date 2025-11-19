import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonPin = (props: IIcon) => {

  return (
    <Icon
      name='PersonPin'

      short_name='PersonPin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-40 360-160H120v-720h720v720H600L480-40ZM200-286q54-53 125.5-83.5T480-400q83 0 154.5 30.5T760-286v-514H200v514Zm280-194q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM280-240h400v-10q-42-35-93-52.5T480-320q-56 0-107 17.5T280-250v10Zm200-320q-25 0-42.5-17.5T420-620q0-25 17.5-42.5T480-680q25 0 42.5 17.5T540-620q0 25-17.5 42.5T480-560Zm0 17Z"/>
    </Icon>
  );
};

IconMaterialPersonPin.displayName = 'OnesyIconMaterialPersonPin';

export default IconMaterialPersonPin;
