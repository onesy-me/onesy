import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeakerNotes = (props: IIcon) => {

  return (
    <Icon
      name='SpeakerNotes'

      short_name='SpeakerNotes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-400q17 0 28.5-11.5T320-440q0-17-11.5-28.5T280-480q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm0-120q17 0 28.5-11.5T320-560q0-17-11.5-28.5T280-600q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm0-120q17 0 28.5-11.5T320-680q0-17-11.5-28.5T280-720q-17 0-28.5 11.5T240-680q0 17 11.5 28.5T280-640Zm120 240h200v-80H400v80Zm0-120h320v-80H400v80Zm0-120h320v-80H400v80ZM80-80v-800h800v640H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialSpeakerNotes.displayName = 'OnesyIconMaterialSpeakerNotes';

export default IconMaterialSpeakerNotes;
