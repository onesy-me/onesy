import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorOpen = (props: IIcon) => {

  return (
    <Icon
      name='DoorOpen'

      short_name='DoorOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-440q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440ZM280-120v-80l240-40v-445q0-15-9-27t-23-14l-208-34v-80l220 36q44 8 72 41t28 77v444q0 29-19 51.5T533-163l-253 43Zm0-80h400v-560H280v560Zm-120 80q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h40v-560q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v560h40q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H160Z"/>
    </Icon>
  );
};

IconMaterialDoorOpen.displayName = 'OnesyIconMaterialDoorOpen';

export default IconMaterialDoorOpen;
