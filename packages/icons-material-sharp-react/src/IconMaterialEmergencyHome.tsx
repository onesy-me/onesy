import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmergencyHome = (props: IIcon) => {

  return (
    <Icon
      name='EmergencyHome'

      short_name='EmergencyHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-425h80v-270h-80v270Zm40 105q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320Zm0 272L48-480l432-432 432 432L480-48Zm0-112 320-320-320-320-320 320 320 320Zm0-320Z"/>
    </Icon>
  );
};

IconMaterialEmergencyHome.displayName = 'OnesyIconMaterialEmergencyHome';

export default IconMaterialEmergencyHome;
